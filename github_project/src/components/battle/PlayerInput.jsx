import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target: { value } }) {
    this.setState(() => ({ username: value }));
  }

  handleSubmit(event) {
    // prevents default form submit action
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username,
    );
  }

  render() {
    const { username } = this.state;
    const { label } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="column">
        <label htmlFor="username">
          {label}
          <input
            id="username"
            type="text"
            placeholder="GitHub username"
            value={username}
            onChange={this.handleInput}
          />
        </label>

        <button
          type="submit"
          className="button"
          disabled={!username}
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PlayerInput;
