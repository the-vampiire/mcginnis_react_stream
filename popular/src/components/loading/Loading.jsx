import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Loading',
    };
  }

  componentDidMount() {
    const stopper = `${this.state.text}...`;

    this.interval = window.setInterval(() => {
      this.setState(currentState => ({
        text: currentState.text === stopper ? 'Loading' : `${currentState.text}.`,
      }));
    }, this.props.rate);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

Loading.propTypes = {
  rate: PropTypes.number,
};

Loading.defaultProps = {
  rate: 200,
};

export default Loading;
