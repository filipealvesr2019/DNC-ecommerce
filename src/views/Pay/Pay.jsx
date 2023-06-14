import React, { Component } from 'react'
import './index.scss';
export default class Pay extends Component {
    state = {
      count: 0,
      text: "ola mundo"
    }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.state.text}</h2>
        <button onClick={() => {this.setState({text: "thau mundo"})}}>Aumentar</button>
      
      <form></form>
      </div>

      
    )
  }
}
