import * as React from 'react';
import * as PT from 'prop-types';
import RepoGrid from './RepoGrid';
import api from '../../tools/githubApi';
import style from './style.css';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ['all', 'python', 'javascript'],
      activeLanguage: 'all',
      repos: null,
      loading: true,
    };

    const languageUrlParam = this.props.match.params.language;
    if (languageUrlParam) {
      this.state.languages.push(languageUrlParam);
      this.state.activeLanguage = languageUrlParam;
    }

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

Popular.propTypes = { match: PT.instanceOf(Object) };

Popular.defaultProps = { match: null };

export default Popular;
