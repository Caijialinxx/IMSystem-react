import React, { Component } from 'react'
import './Tools.css'
import Tool from './Tool'

export default class Tools extends Component {
  render() {
    return (
      <div className="toolsWrapper">
        <Tool type='emoji' />
        <Tool type='color' />
        <Tool type='file' />
      </div >
    )
  }
}