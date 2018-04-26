import 'babel-polyfill'; // for async / await
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import PlayerInput from './PlayerInput';
import Player from './Player';
import api from '../../tools/api';

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      playerOne: {},
      playerTwo: {},
    };

    this.reset = this.reset.bind(this);
    this.getResults = this.getResults.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.getPlayersData = this.getPlayersData.bind(this);
    this.comparePlayers = this.comparePlayers.bind(this);
  }

  componentDidMount() {
    // update with url parameters if available
    const { playerOneName, playerTwoName } = this.props.match.params;
    if (playerOneName) this.addPlayer('playerOne', playerOneName);
    if (playerTwoName) this.addPlayer('playerTwo', playerTwoName);
  }

  getResults() {
    this.getPlayersData()
      .then(() => this.comparePlayers())
      .then(results => this.setState(() => ({ results })));
  }

  async getPlayersData() {
    const { playerOne, playerTwo } = this.state;
    const playerOneData = await api.userData(playerOne.username);
    const playerTwoData = await api.userData(playerTwo.username);

    this.setState((currentState) => {
      const newState = Object.assign({}, currentState);
      newState.playerOne.data = playerOneData;
      newState.playerTwo.data = playerTwoData;
      return newState;
    });
  }

  addPlayer(id, username) {
    this.setState(() => {
      const newState = {};
      newState[id] = {
        username,
        image: `https://github.com/${username}.png?size=250`,
      };
      return newState;
    },
    // update the url with player usernames after setting state
    () => {
      const { playerOne, playerTwo } = this.state;
      const path = `/battle/${playerOne.username}/${playerTwo.username}`;
      this.props.history.push(path);
    },
    );
  }

  reset(id = null) {
    // reset battle container
    if (!id) {
      this.setState(() => ({
        results: null,
        playerOne: {},
        playerTwo: {},
      }));
    }
    // reset player by id
    this.setState(() => {
      const newState = { results: null };
      newState[id] = {
        username: null,
        image: null,
        data: null,
      };
      return newState;
    });
  }

  comparePlayers() {
    const { playerOne, playerTwo } = this.state;

    if (!playerOne.data || !playerTwo.data) return null;

    return playerOne.data.followers > playerTwo.data.followers
      ? { playerOne: 'Winner', playerTwo: 'Loser' }
      : { playerOne: 'Loser', playerTwo: 'Winner' };
  }

  render() {
    const { results, playerOne, playerTwo } = this.state;

    return (
      <div className="battle_container">
        <div className="row">
          {
            // PlayerInput if there is no username for player one
            // Player if a username exists for player one
            !playerOne.username
              ?
                <PlayerInput
                  id="playerOne"
                  label="Player One"
                  onSubmit={this.addPlayer}
                />
              :
                <Player
                  username={playerOne.username}
                  image={playerOne.image}
                  result={results ? results.playerOne : null}
                  data={playerOne.data}
                  id="playerOne"
                  onReset={this.reset}
                />
          }
          {
            // if both players are populated display battle / reset button
            playerOne.username && playerTwo.username
              &&
                <div>
                  <button
                    className="button battle"
                    onClick={() => {
                      if (results) return this.reset();
                      return this.getResults();
                    }}
                  >
                    { results ? 'RESET ALL' : 'BATTLE!'}
                  </button>
                </div>
          }
          {
            !playerTwo.username
              ?
                <PlayerInput
                  id="playerTwo"
                  label="Player Two"
                  onSubmit={this.addPlayer}
                />
              :
                <Player
                  username={playerTwo.username}
                  image={playerTwo.image}
                  result={results ? results.playerTwo : null}
                  data={playerTwo.data}
                  id="playerTwo"
                  onReset={this.reset}
                />
          }
        </div>
      </div>
    );
  }
}

Battle.propTypes = {
  match: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object),
};

Battle.defaultProps = {
  match: null,
  history: null,
};

export default Battle;
