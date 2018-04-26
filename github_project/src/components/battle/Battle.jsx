import 'babel-polyfill'; // for async / await
import React, { Component } from 'react';
import style from './style.css';
import PlayerInput from './PlayerInput';
import Player from './Player';
import api from '../../tools/api';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      playerOneName: null,
      playerTwoName: null,
      playerOneImage: null,
      playerTwoImage: null,
      playerOneData: null,
      playerTwoData: null,
    };

    this.resetPlayer = this.resetPlayer.bind(this);
    this.getResults = this.getResults.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.getPlayersData = this.getPlayersData.bind(this);
    this.comparePlayers = this.comparePlayers.bind(this);
  }

  getResults() {
    this.getPlayersData()
      .then(() => this.comparePlayers())
      .then(results => this.setState(() => ({ results })));
  }

  async getPlayersData() {
    const { playerOneName, playerTwoName } = this.state;
    const playerOneData = await api.userData(playerOneName);
    const playerTwoData = await api.userData(playerTwoName);

    this.setState(() => ({ playerOneData, playerTwoData }));
  }

  addPlayer(id, username) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com/${username}.png?size=250`;
      return newState;
    });
  }

  resetPlayer(id) {
    this.setState(() => {
      const newState = { results: null };
      newState[`${id}Name`] = null;
      newState[`${id}Image`] = null;
      return newState;
    });
  }

  comparePlayers() {
    const { playerOneData, playerTwoData } = this.state;

    if (!playerOneData || !playerTwoData) return null;

    return playerOneData.followers > playerTwoData.followers
      ? { playerOne: 'Winner', playerTwo: 'Loser' }
      : { playerOne: 'Loser', playerTwo: 'Winner' };
  }

  render() {
    const {
      results,
      playerOneName,
      playerTwoName,
      playerOneImage,
      playerTwoImage,
      playerOneData,
      playerTwoData,
    } = this.state;

    return (
      <div className="battle_container">
        <div className="row">
          {
            !playerOneName
              ?
                <PlayerInput
                  id="playerOne"
                  label="Player One"
                  onSubmit={this.addPlayer}
                />
              :
                <Player
                  username={playerOneName}
                  image={playerOneImage}
                  result={results ? results.playerOne : null}
                  data={playerOneData}
                  id="playerOne"
                  onReset={this.resetPlayer}
                />
          }
          {
            !results && playerOneName && playerTwoName
              ?
                <div>
                  <button
                    className="button battle"
                    onClick={() => this.getResults(playerOneName, playerTwoName)}
                  >
                    BATTLE!
                  </button>
                </div>
              :
                null
          }
          {
            !playerTwoName
              ?
                <PlayerInput
                  id="playerTwo"
                  label="Player Two"
                  onSubmit={this.addPlayer}
                />
              :
                <Player
                  username={playerTwoName}
                  image={playerTwoImage}
                  result={results ? results.playerTwo : null}
                  data={playerTwoData}
                  id="playerTwo"
                  onReset={this.resetPlayer}
                />
          }
        </div>
      </div>
    );
  }
}

export default Battle;
