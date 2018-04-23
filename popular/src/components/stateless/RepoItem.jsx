import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = (props) => {
  const {
    name,
    html_url: repoUrl,
    stargazers_count: stargazersCount,
    description,
    owner: { login, avatar_url: avatarUrl, html_url: ownerUrl },
  } = props.repo;
  return (
    <div key={name} className="repo_item">
      <a href={repoUrl}>
        <img src={avatarUrl} className="avatar" alt="repo owner avatar" />
      </a>
      <h1 className="repo_name">{name.toUpperCase()}</h1>
      <h2 className="repo_owner">
                Owner: <a href={ownerUrl}>{login.toUpperCase()}</a>
      </h2>
      <h3>
        {stargazersCount}
        <span role="img" aria-label="star emoji">⭐</span>
      </h3>
      <p className="repo_description">{description}</p>

    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.instanceOf(Object).isRequired,
};

export default RepoItem;
