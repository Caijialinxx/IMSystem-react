import React, { Component } from 'react'
import './App.css'
import LoginForm from './LogInForm'

let iconfont_ca = document.createElement('script')
iconfont_ca.src = '//at.alicdn.com/t/font_604218_kbl2bsjt2rxav2t9.js'
document.head.appendChild(iconfont_ca)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      isLoggedIn: false,
    }
  }
  render() {
    return (
      <div className='APP'>
        <div className='background'></div>
        {this.state.isLoggedIn ? null : <LoginForm onSubmit={this.logIn.bind(this)} />}
        <footer>created by <a href=''>Caijialinxx</a> | <a href=''>React</a></footer>
      </div>
    )
  }
  logIn(username) {
    this.setState({ username: username, isLoggedIn: true })
  }
}

export default App
