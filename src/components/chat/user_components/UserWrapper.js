import React, { Component } from 'react'
import './UserWrapper.css'
import SearchResult from './SearchResult'
import GroupPassword from './GroupPassword'
import UsersList from './UsersList'

export default class UserWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSerachingFriend: false,
      isJoiningGroup: false,
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="userName">{this.props.userName || '_'}</h1>

        <div id="searchBox" className="searchBox">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg>
          <input type="text" maxLength="20" placeholder="Search for" />
        </div>
        {this.state.isSerachingFriend ? <SearchResult /> : null}

        <div id="joinGroup" className="joinGroup">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-group"></use>
          </svg>
          <div className="action">
            <button id="create">Create</button><button id="join">Join</button>
          </div>
        </div>
        {this.state.isJoiningGroup ? <GroupPassword /> : null}

        <UsersList />
      </div>
    )
  }
}