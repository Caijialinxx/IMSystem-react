import React, { Component } from 'react'
import './SearchFriend.css'

export default class SearchFriend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSerachingFriend: false
    }
  }
  render() {
    return (
      <div className="serachWrapper">
        <div id="searchBox" className="searchBox">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg>
          <input type="text" maxLength="20" placeholder="Search for" />
        </div>
        {this.state.isSerachingFriend ?
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
          </div> :
          null
        }
      </div>
    )
  }
}