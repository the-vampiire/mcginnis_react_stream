import LanguageSelect from './stateless/LanguageSelect';
import AddLanguage from '../add_language/AddLanguage';
import RepoGrid from '../popular/stateless/RepoGrid';
import API from '../../utilities/github_api';
import React, { Component } from 'react';
import Loading from '../loading/Loading';
import style from './style.css';

class PopularRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            languages: ['all', 'python', 'javascript'],
            activeLanguage: 'all',
            repos: [],
        }

        this.setActiveLanguage = this.setActiveLanguage.bind(this);
        this.handleAddLanguage = this.handleAddLanguage.bind(this);
        this.handleRemoveLanguage = this.handleRemoveLanguage.bind(this);
    }

    componentDidMount() {
        this.setActiveLanguage(this.state.activeLanguage);
    }

    handleAddLanguage(language) {
        this.setState(
            (state) => ({ languages: state.languages.concat(language) }),
        );

        this.setActiveLanguage(language);
    }

    handleRemoveLanguage(language) {
        this.setState(
            (state) => ({
                languages: state.languages.length > 1
                    ? state.languages.filter(e => e !== language)
                    : state.languages,
                activeLanguage: 'all'
            })
        );
    }

    setActiveLanguage(language) {
        this.setState(() => ({ loading: true }));

        API.getTopRepos(language)
        .then(
            repos => this.setState(
                () => ({
                    loading: false,
                    activeLanguage: language,
                    repos,
                }),
            ),
        ).catch(console.error);
    }

    render() {
        if (this.state.loading) return <Loading rate={120} />;

        return (
            <div id="popular_container">
                <LanguageSelect
                    languages={this.state.languages}
                    activeLanguage={this.state.activeLanguage}
                    onSelectLanguage={this.setActiveLanguage}
                    onRemoveLanguage={this.handleRemoveLanguage}
                />

                <AddLanguage onAddLanguage={this.handleAddLanguage} />

                <RepoGrid repos={this.state.repos} />
            </div>
        );
    }
}

export default PopularRepos;
