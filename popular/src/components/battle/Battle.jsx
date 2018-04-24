import React, { Component } from 'react';
import BattleUser from '../battle_user/BattleUser';
import style from './style.css';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: {
        username: null,
        followers: null,
        joinDate: null,
      },
      playerTwo: {
        username: null,
        followers: null,
        joinDate: null,
      },
    };

    this.storePlayerData = this.storePlayerData.bind(this);
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
  }

  render() {
    return (
      <div className="battle_container">
        <BattleUser
          battleUserId="playerOne"
          onValidData={this.storePlayerData}
        />

        <BattleUser
          battleUserId="playerTwo"
          onValidData={this.storePlayerData}
        />
      </div>
    );
  }
}

export default Battle;
