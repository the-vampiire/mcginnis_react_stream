import React, { Component } from 'react';
import style from './style.css';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: null,
      playerTwoName: null,
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  addPlayer(id, username) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com/${username}.png?size=250`;
      return newState;
    });
  }

  handleReset(id) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = null;
      newState[`${id}Image`] = null;
      return newState;
    });
  }

  render() {
    const {
      playerOneName,
      playerTwoName,
      playerOneImage,
      playerTwoImage,
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
                <PlayerPreview
                  username={playerOneName}
                  image={playerOneImage}
                  id="playerOne"
                  onReset={this.handleReset}
                />
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
                <PlayerPreview
                  username={playerTwoName}
                  image={playerTwoImage}
                  id="playerTwo"
                  onReset={this.handleReset}
                />
          }
        </div>
      </div>
    );
  }
}

export default Battle;
