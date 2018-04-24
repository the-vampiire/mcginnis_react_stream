import React, { Component } from 'react';
import BattleUser from '../battle_user/BattleUser';
import style from './style.css';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: {},
      playerTwo: {},
      battleComplete: false,
    };

    this.storePlayerData = this.storePlayerData.bind(this);
  }

  getResults() {
    const { playerOne, playerTwo } = this.state;

    return playerOne.followers > playerTwo.followers
      ? { winner: playerOne, loser: playerTwo }
      : { winner: playerTwo, loser: playerOne };
  }

  storePlayerData(playerId, username, followers, joinDate) {
    this.setState(() => {
      const newState = {};
      const date = new Date(joinDate);

      newState[playerId] = {
        username,
        followers,
        joinDate: date.getTime(),
      };

      return newState;
    });

    this.setState((currentState) => {
      if (
        !currentState.playerOne.username ||
        !currentState.playerTwo.username
      ) return null;

      return { battleComplete: true };
    });
  }

  battleResultClass(player) {
    const results = this.getResults();
    return results.winner === player ? 'winner' : 'loser';
  }

  render() {
    return (
      <div className="battle_container">
        <BattleUser
          battleUserId="playerOne"
          onValidData={this.storePlayerData}
          battleResultClass={
            this.state.battleComplete ? this.battleResultClass(this.state.playerOne) : null
          }
        />
        {
          this.state.playerOne.username
            ?
              <BattleUser
                battleUserId="playerTwo"
                onValidData={this.storePlayerData}
                battleResultClass={
                  this.state.battleComplete ? this.battleResultClass(this.state.playerTwo) : null
                }
              />
            :
              null
        }
      </div>
    );
  }
}

export default Battle;
