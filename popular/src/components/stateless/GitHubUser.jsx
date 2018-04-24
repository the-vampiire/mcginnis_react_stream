import React from 'react';
import PropTypes from 'prop-types';

const GitHubUser = ({ username, userData }) => (
  <div className="battle_user" >
    <a href={userData.html_url}>
      <img src={userData.avatar_url} alt={`${username} avatar`} />
    </a>

    <h2>{username.toUpperCase()}</h2>

    <div className="battle_user_detail">
      <table>
        <tr>
          <td>Join Date</td>
          <td>{new Date(userData.created_at).toDateString()}</td>
        </tr>
        <tr>
          <td>Followers</td>
          <td>{userData.followers}</td>
        </tr>
        <tr>
          <td>Repos</td>
          <td>{userData.public_repos}</td>
        </tr>
        <tr>
          <td>Gists</td>
          <td>{userData.public_gists}</td>
        </tr>
      </table>
    </div>
  </div>
);

GitHubUser.propTypes = {
  username: PropTypes.string.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
};

export default GitHubUser;
