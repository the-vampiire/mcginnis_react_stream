import React from 'react';
import PropTypes from 'prop-types';

const LanguageSelect = props => (
  <div >
    <ul id="language_select">{
            props.languages.map(language => (
              <li
                key={language}
                name={language}
                style={language === props.activeLanguage ? { backgroundColor: '#15df89', color: 'white' } : null}
                className="language_select_item"
              >
                <div onClick={() => props.onSelectLanguage(language)} >
                  <h1>
                    { language.toUpperCase() }
                  </h1>
                </div>

                <button onClick={() => props.onRemoveLanguage(language)}>
                  <span role="img" aria-label="remove language">
                    🚫
                  </span>
                </button>
              </li>
            ))
        }
    </ul>
  </div>
);

LanguageSelect.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeLanguage: PropTypes.string.isRequired,
};

export default LanguageSelect;
