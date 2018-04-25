import React, { Component } from 'react';
import RepoGrid from './RepoGrid';
import api from '../../tools/githubApi';
import style from './style.css';

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ['all', 'python', 'javascript'],
      activeLanguage: 'all',
      repos: null,
      loading: true,
    };

    this.setLanguage = this.setLanguage.bind(this);
  }

  componentDidMount() {
    this.setLanguage(this.state.activeLanguage);
  }

  setRepos(language) {
    api.topRepos(language)
      .then((repos) => {
        this.setState(() => ({
          repos,
          loading: false,
        }));
      })
      .catch(console.error);
  }

  setLanguage(language) {
    this.setState(currentState => (
      currentState.activeLanguage === language
        ? null
        : { activeLanguage: language, loading: true }
    ));

    this.setRepos(language);
  }

  render() {
    const {
      languages,
      activeLanguage,
      repos,
      loading,
    } = this.state;

    return (
      <div>
        <div className="nav language_select">
          <ul>
            {
              languages.map(language => (
                <li
                  key={language}
                  onClick={() => this.setLanguage(language)}
                  className={language === activeLanguage ? 'active' : null}
                >
                  {language}
                </li>
              ))
            }
          </ul>
        </div>
        {
          loading ? 'LOADING...' : <RepoGrid repos={repos} />
        }
      </div>
    );
  }
}

export default Popular;
