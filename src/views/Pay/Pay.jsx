import React, { Component } from 'react'

export default class Pay extends Component {
    
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>0</h2>
        <button>Aumentar</button>
      </div>
    )
  }
}
