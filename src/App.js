import React, { Component } from 'react'
import './App.css'
import LoginForm from './LogInForm'
import ChatRoom from './ChatRoom'
// import io from 'socket.io'

// window.onload = function () {
//   let ca = new CA()
//   ca.init()
//   window.ca = ca
// }

// var CA = function () {
//   this.socket = null
// }

// CA.prototype = {  
//   init: function () {
//     var that = this
//     this.socket = io.connect('http://localhost:8000/')
//     // BEGIN 监听服务端 —— 判断登录状态
//     // this.socket.on('connect', function () {
//     //   $('#nicknameInput').focus()
//     // })
//     // this.socket.on('nicknameExisted', function () {
//     //   $('#info')[0].children[1].textContent = "Nickname Existed!"
//     //   $('#info').css('visibility', "visible")
//     //   $('#nicknameInput').focus()
//     // })
//     // this.socket.on('nicknameIllegal', function () {
//     //   $('#info')[0].children[1].textContent = "Nickname is illegal!"
//     //   $('#info').css('visibility', "visible")
//     //   $('#nicknameInput').focus()
//     // })
//     // this.socket.on('loginSuccessfully', function (nickname) {
//     //   document.title = 'CA | ' + $('#nicknameInput')[0].value
//     //   $('#loginWrapper').css('display', 'none')
//     //   $('#main').css('display', 'block')
//     //   $('#userName')[0].textContent = nickname
//     //   $('#searchBox input').focus()
//     //   that._robot('welcome')
//     //   $('li#Robot').addClass('active')
//     //   $('.head')[0].textContent = 'Robot'
//     // })
//   }
// }


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
        {this.state.isLoggedIn ? <ChatRoom /> : <LoginForm onSubmit={this.logIn.bind(this)} />}
        <footer>created by <a href=''>Caijialinxx</a> | <a href=''>React</a></footer>
      </div>
    )
  }
  logIn(username) {
    this.setState({ username: username, isLoggedIn: true })
  }
}

export default App
