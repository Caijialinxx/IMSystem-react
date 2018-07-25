import React, { Component } from 'react'
import './JoinGroup.css'

export default class UserWrapper extends Component {
  render() {
    return (
      <div className="groupWrapper">
        <div id="joinGroup" className="joinGroup clearfix">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-group"></use>
          </svg>
          <div className="action">
            <button id="create">Create</button><button id="join">Join</button>
          </div>
        </div>
        <div className="pwdBox">
          <div id="cancelBtn">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </div>
          <div className="intro"></div>
          <div id="pwd">
            <input type="text" maxLength="1" id="first" />
            <input type="text" maxLength="1" id="second" />
            <input type="text" maxLength="1" id="third" />
            <input type="text" maxLength="1" id="fourth" />
          </div>
          <div className="info">Valid duration: <input type="text" id="duration" maxLength="3" /> mins.</div>
          <button id="confirm">Confirm</button>
        </div>
      </div>
    )
  }
}