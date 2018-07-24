import React, { Component } from 'react'
import './Controllers.css'
import Tools from './Tools'

export default class Controllers extends Component {
  render() {
    return (
      <div className="controllers">
        <Tools />
        <div className="editWrapper">
          <pre className="editArea" contentEditable="true"></pre>
        </div>
        <div className="sendWrapper">
          <span>Ctrl + Enter 换行</span>
          <input type="button" value="SEND" className="sendBtn" />
        </div>
      </div>
    )
  }
}