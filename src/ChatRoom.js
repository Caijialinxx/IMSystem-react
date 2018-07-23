import React, { Component } from 'react'
import './ChatRoom.css'
import UserWrapper from './UserWrapper'
import ChatWrapper from './ChatWrapper';
import Robot from './datas/robot.json'

export default class ChatRoom extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main className="main">
        <UserWrapper className='userWrapper' />
        <ChatWrapper className='chatWrapper' />
      </main>
    )
  }
}