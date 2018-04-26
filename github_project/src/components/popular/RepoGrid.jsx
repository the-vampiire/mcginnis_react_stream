import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const RepoGrid = props => (
  <div className="repo_grid">
    {
      props.repos.map(repo => (<RepoItem key={repo.name} repo={repo} />))
    }
  </div>
);

RepoGrid.propTypes = {
  repos: PropTypes.instanceOf(Array).isRequired,
};

export default RepoGrid;
