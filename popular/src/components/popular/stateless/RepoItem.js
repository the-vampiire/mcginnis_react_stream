import React from 'react';

const RepoItem = (props) => {
    const {
        name,
        html_url: repo_url,
        stargazers_count,
        description,
        owner: { login, avatar_url, html_url: owner_url }
    } = props.repo;
    return (
        <div key={name} className="repo_item">
            <a href={repo_url}>
                <img src={avatar_url} className="avatar" />
            </a>
            <h1 className="repo_name">{name.toUpperCase()}</h1>
            <h2 className="repo_owner">
                Owner: <a href={owner_url}>{login.toUpperCase()}</a>
            </h2>
            <h3>{stargazers_count} ⭐</h3>
            <p className="repo_description">{description}</p>
            
        </div>
    );
}

export default RepoItem;
