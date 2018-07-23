import React, { Component } from 'react'
import './UserWrapper.css'
import SerachFriend from './SearchFriend'
import JoinGroup from './JoinGroup'
import UsersList from './UsersList'

export default class UserWrapper extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="userName">{this.props.username || '_'}</h1>
        <SerachFriend />
        <JoinGroup />
        <UsersList />
      </div>
    )
  }
}