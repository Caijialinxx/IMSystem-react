import React, { Component } from 'react'
import './ChatWrapper.css'
import MessageBox from './MessageBox'
import Controllers from './Controllers'

export default class ChatWrapper extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <header>Robot</header>
        <MessageBox />
        <Controllers />
      </div>
    )
  }
}