import React, { Component } from 'react'
import './LogInForm.css'

export default class LogInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  render() {
    return (
      <div className='loginWrapper'>
        <header>
          <svg class="icon" aria-hidden="true">
            <use xlinkHref="#icon-logo"></use>
          </svg>
          <p>CA Chat</p>
        </header>
        <div id="nicknameWrapper">
          <div id="warning" className="warning"></div>
          <form id='loginForm' onSubmit={this.logIn.bind(this)} >
            <input type="text" id="nicknameInput" className="nicknameInput" value={this.state.username} onChange={this.usernameChanging.bind(this)} maxLength="20" placeholder="Nickname please" />
            <input type="submit" value="Enter" id="loginBtn" className="loginBtn" />
          </form>
          <a href="javascript:;" id="giveName">Give me a name</a>
        </div>
      </div>
    )
  }
  logIn(e) {
    e.preventDefault()
  }
  usernameChanging(e) {
    let state_copy = JSON.parse(JSON.stringify(this.state))
    state_copy.username = e.target.value
    this.setState(state_copy)
  }
}