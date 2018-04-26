import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = (props) => {
  const {
    name,
    html_url: repoUrl,
    stargazers_count: stars,
    description,
    owner: {
      login,
      avatar_url: imageUrl,
      html_url: ownerUrl,
    },
  } = props.repo;

  return (
    <div className="repo_item">
      <a href={repoUrl}>
        <img src={imageUrl} alt="avatar" />
      </a>

      <h1>{name.toUpperCase()}</h1>
      <h3>
        by <a href={ownerUrl}>@{login.toUpperCase()}</a>
      </h3>
      <h2>Stars: {stars}</h2>

      <p>{description}</p>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.instanceOf(Object).isRequired,
};

export default RepoItem;
