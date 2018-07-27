import React, { Component } from 'react'
import './Tools.css'
import Tool from './Tool'

export default class Tools extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEmojisBoxInited: false
    }
  }
  render() {
    return (
      <div className="toolsWrapper" onClick={this.stopPropagation.bind(this)}>
        <Tool id='emoji' type='emoji' onClick={this.initEmojis.bind(this)} />
        <Tool type='color' />
        <Tool type='file' />
      </div >
    )
  }
  initEmojis() {
    let box
    if (this.state.isEmojisBoxInited === false) {
      box = document.createElement('div')
      let docFragment = document.createDocumentFragment()
      box.className = 'emojisBox'
      let index
      for (let i = 1; i <= 30; i++) {
        if (i < 10) { index = '0' + i }
        else { index = String(i) }
        let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        iconSvg.innerHTML = '<use xlink:href="#icon-emoji-' + index + '"></use>'
        docFragment.appendChild(iconSvg)
      }
      box.appendChild(docFragment)
      document.querySelector('label#emoji').appendChild(box)
      this.state.isEmojisBoxInited = true
    } else {
      box = document.querySelector('.emojisBox')
    }
    console.log('btn click')
    box.style.display = (box.style.display === '' || box.style.display === 'none') ? 'block' : 'none'
    console.log('show')
    setTimeout(function () {
      document.body.addEventListener('click', function () {
        console.log('body click')
        box.style.display = 'none'
        console.log('hide')
      }, { once: true })
    }, 0)
  }
  stopPropagation(e) {
    e.stopPropagation()
    console.log('阻止冒泡，bodyClick不执行')
  }
}