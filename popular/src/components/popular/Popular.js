import React, { Component } from 'react';
import API from '../../utilities/github_api';
import SelectLanguage from './stateless/SelectLanguage';

class PopularRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ['all', 'python', 'javascript'],
            activeLanguage: 'all',
            repos: [],
        }

        this.setactiveLanguage = this.setactiveLanguage.bind(this);
    }

    setactiveLanguage(language) {
        console.log(language)
        API.getTopRepos(language)
        .then(
            repos => this.setState(
                () => ({ activeLanguage: language, repos }),
            ),
        ).catch(console.error);
    }

    render() {
        console.log(this.state)
        return (
            <div id="popular_container">
                <SelectLanguage
                    languages={this.state.languages}
                    activeLanguage={this.state.activeLanguage}
                    onLanguageSelect={this.setactiveLanguage}
                />
            </div>
        );
    }
}

export default PopularRepos;
