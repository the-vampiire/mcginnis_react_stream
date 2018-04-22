import React, { Component } from 'react';

class Loading extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        text: 'Loading'
      }
    }
  
    componentDidMount() {
      const stopper = `${this.state.text}...`;
  
      this.interval = window.setInterval(() => {
        this.setState(
            (currentState) => ({
                text: currentState.text === stopper ? 'Loading' : currentState.text + '.'
            }),
        );
      }, this.props.rate);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return <h1>{this.state.text}</h1>
    }
  }

  export default Loading;
