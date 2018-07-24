import React, { Component } from 'react'
import './ChatRoom.css'
import UserWrapper from './UserWrapper'
import ChatWrapper from './ChatWrapper';

export default class ChatRoom extends Component {
  render() {
    return (
      <main className="main">
        <UserWrapper className='userWrapper' userName={this.props.userName} />
        <ChatWrapper className='chatWrapper' />
      </main>
    )
  }
}