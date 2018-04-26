import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'react-loading';
import RepoGrid from './RepoGrid';
import api from '../../tools/api';
import style from './style.css';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ['all', 'python', 'javascript'],
      activeLanguage: 'all',
      repos: null,
      fetchError: null,
      loading: true,
    };

    const languageUrlParam = this.props.match.params.language;
    if (languageUrlParam) {
      this.state.languages.push(languageUrlParam);
      this.state.activeLanguage = languageUrlParam;
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.activeLanguage);
  }

  updateLanguage(language) {
    // prevents state update for same language selection (multiple clicks by user)
    this.setState(currentState => (
      currentState.activeLanguage === language
        ? null
        : { activeLanguage: language, loading: true }
        // only makes the API call and grid state update if necessary
    ), () => this.state.loading && this.updateRepos(language));
  }

  updateRepos(language) {
    api.topRepos(language)
      .then((repos) => {
        this.setState(() => ({
          repos,
          loading: false,
          fetchError: null,
        }));
      })
      .catch(() => this.setState(() => ({ fetchError: true })));
  }

  render() {
    if (this.state.fetchError) return (<h1>An error occurred in loading</h1>);

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
                  onClick={() => this.updateLanguage(language)}
                  className={language === activeLanguage ? 'active' : null}
                >
                  {language}
                </li>
              ))
            }
          </ul>
        </div>
        {
          loading
            ? <Loading type="bars" color="rgb(200,0,0)" height="200px" width="500px" />
            : <RepoGrid repos={repos} />
        }
      </div>
    );
  }
}

Popular.propTypes = { match: PropTypes.instanceOf(Object) };

Popular.defaultProps = { match: null };

export default Popular;
