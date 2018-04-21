import React, { Component } from 'react';

const SelectLanguage = (props) => (
    <div id="language_select">
        <ul>{
            props.languages.map(language => (
                <li
                    key={language}
                    name={language}
                    className="language_select_item"
                    style={ language === props.activeLanguage ? { color: 'red' } : null }
                    onClick={ () => props.onLanguageSelect(language) }
                >
                    { language.toUpperCase() }
                </li>
            ))
        }</ul>
    </div>
);

export default SelectLanguage;
