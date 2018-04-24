import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valid: false,
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue({ target: { value } }) {
    this.setState(() => (value === '' ? { value, valid: false } : { value, valid: true }));
  }

  render() {
    const {
      divId,
      className,
      submitText,
      submitAction,
    } = this.props;

    return (
      <div id={divId} className={className}>
        <input type="text" onChange={this.updateValue} />
        <button
          onClick={() => (this.state.valid ? submitAction(this.state.value) : null)}
        >
          {submitText}
        </button>
      </div>
    );
  }
}

TextInput.propTypes = {
  divId: PropTypes.string,
  className: PropTypes.string,
  submitText: PropTypes.string,
  submitAction: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  divId: null,
  className: null,
  submitText: 'Submit',
};

export default TextInput;
