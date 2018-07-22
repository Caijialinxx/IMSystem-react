import React, { Component } from 'react'
import './App.css'
import LoginForm from './LogInForm'

let iconfont_ca = document.createElement('script')
iconfont_ca.src = '//at.alicdn.com/t/font_604218_kbl2bsjt2rxav2t9.js'
document.head.appendChild(iconfont_ca)


class App extends Component {
  render() {
    return (
      <div className='APP'>
        <div className='background'></div>
        <LoginForm />
        <footer>created by <a href=''>Caijialinxx</a> | <a href=''>React</a></footer>
      </div>
    )
  }
}

export default App
