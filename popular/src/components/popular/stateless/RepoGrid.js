import React from 'react';
import RepoItem from './RepoItem';

const RepoGrid = (props) => (
    <div id="repo_grid">{
        props.repos.map(
            (repo, i) => ( <RepoItem key={i} repo={repo} /> ),
        )
    }</div>
);

export default RepoGrid;
