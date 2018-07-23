import React, { Component } from 'react'
import './UsersList.css'

export default class UsersList extends Component {
  render() {
    return (
      <ul className='usersList'>
        <label htmlFor="Robot">
          <li id="Robot">Robot</li>
        </label>
      </ul>
    )
  }
}