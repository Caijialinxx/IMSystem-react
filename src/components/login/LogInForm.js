import React, { Component } from 'react'
import './LogInForm.css'
import nicknames from '../../datas/nickname.json'

export default class LogInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: '',
      warnNeeded: false,
      warningMsg: '',
      btnDisabled: true
    }
  }
  render() {
    return (
      <div className='loginWrapper'>
        <header>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-logo"></use>
          </svg>
          <p>CA Chat</p>
        </header>
        <div className="nicknameWrapper">
          {this.state.warnNeeded ? <p className="warning">{this.state.warningMsg}</p> : null}
          <form className='loginForm' onSubmit={this.logIn.bind(this)} >
            <input type="text" className="nicknameInput" value={this.state.nickname} onChange={this.changeState.bind(this)} maxLength="20" placeholder="Nickname please" />
            <input type="submit" value="Enter" className="loginBtn" disabled={this.state.btnDisabled} />
          </form>
          <a href="javascript:;" onClick={this.giveName.bind(this)}>Give me a name</a>
        </div>
      </div>
    )
  }
  logIn(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.nickname)
  }
  changeState(e) {
    if (e.target.value.trim() === '') {
      this.setState({ nickname: e.target.value, warnNeeded: true, warningMsg: 'Nickname is Blank!', btnDisabled: true })
    } else {
      this.setState({ nickname: e.target.value, warnNeeded: false, warningMsg: '', btnDisabled: false })
    }
  }
  giveName() {
    let index = Math.ceil(Math.random() * 105)
    this.setState({ nickname: nicknames[index], warnNeeded: false, warningMsg: '', btnDisabled: false })
  }
}