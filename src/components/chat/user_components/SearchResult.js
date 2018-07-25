import React, { Component } from 'react'
import './SearchResult.css'

export default class SearchFriend extends Component {
  render() {
    return (
      <div id="alert" className="alert">
        <div id="closeBtn">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </div>
        <div className="info">
          <span className="friendName"></span>
          <span className="status"></span>
        </div>
        <div className="action">
          <input type="text" maxLength="30" placeholder="Authentication" />
          <button>Add</button>
        </div>
      </div>
    )
  }
}