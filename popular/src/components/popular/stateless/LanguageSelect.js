import React from 'react';

const LanguageSelect = (props) => (
    <div >
        <ul id="language_select">{
            props.languages.map(language => (
                <li
                    key={language}
                    name={language}
                    style={ language === props.activeLanguage ? { backgroundColor: '#15df89', color: 'white' } : null }
                    className="language_select_item" 
                >
                    <h1 onClick={ () => props.onSelectLanguage(language) }>
                        { language.toUpperCase() }
                    </h1>

                    <button onClick={ () => props.onRemoveLanguage(language) }>🚫</button>
                </li>
            ))
        }</ul>
    </div>
);

export default LanguageSelect;
