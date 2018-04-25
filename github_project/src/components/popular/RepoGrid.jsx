import * as React from 'react';
import PT from 'prop-types';
import RepoItem from './RepoItem';

const RepoGrid = props => (
  <div className="repo_grid">
    {
      props.repos.map(repo => (<RepoItem key={repo.name} repo={repo} />))
    }
  </div>
);

RepoGrid.propTypes = {
  repos: PT.instanceOf(Array).isRequired,
};

export default RepoGrid;
