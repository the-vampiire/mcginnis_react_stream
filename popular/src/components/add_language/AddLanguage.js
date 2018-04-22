import React, { Component } from 'react';

class LanguageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            valid: false,
        }

        this.updateValue = this.updateValue.bind(this);
    }

    updateValue({ target: { value }}) {
        this.setState(
            () => (value === '' ? { value, valid: false } : { value, valid: true }),
        );
    }

    render() {
        return (
            <div id="add_language">
                <input type="text" onChange={this.updateValue} />
                <button
                    onClick={ () => this.state.valid ? this.props.onAddLanguage(this.state.value) : null }
                >
                    Add Language
                </button>
            </div>
        );
    }
}

export default LanguageInput;
