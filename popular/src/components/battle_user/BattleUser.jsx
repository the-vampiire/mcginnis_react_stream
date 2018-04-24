import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../text_input/TextInput';
import API from '../../utilities/github_api';
import GitHubUser from '../stateless/GitHubUser';
import style from './style.css';

class BattleUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      userData: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username) {
    API.getUserData(username)
      .then((userData) => {
        const { battleUserId, onValidData } = this.props;

        this.setState(() => {
          onValidData(
            battleUserId,
            username,
            userData.followers,
            userData.created_at,
          );

          return { username, userData };
        });
      })
      .catch(console.error);
  }

  render() {
    const { username, userData } = this.state;
    return (
      <div className="battle_user_container">
        {
          username && userData
          ?
            <GitHubUser username={username} userData={userData} />
          :
            <TextInput
              submitText="Add User"
              className="battle_user_text_input"
              submitAction={this.handleSubmit}
            />
        }
      </div>
    );
  }
}

BattleUser.propTypes = {
  battleUserId: PropTypes.string.isRequired,
  onValidData: PropTypes.func.isRequired,
};

export default BattleUser;
