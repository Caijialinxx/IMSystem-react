import React from 'react'
import './EmojisBox.css'

let iconfont_emoji = document.createElement('script')
iconfont_emoji.src = '//at.alicdn.com/t/font_606596_4iofyd5c9w94quxr.js'
document.head.appendChild(iconfont_emoji)

export default function (props) {
  let iconHref
  if (props.type === 'color') {
    iconHref = '#icon-textcolor'
  } else if (props.type === 'file') {
    iconHref = '#icon-doc'
  } else if (props.type === 'emoji') {
    iconHref = '#icon-emoji'
  }
  return (
    <label id={props.type} onClick={props.type === 'emoji' ? initEmoji.bind(undefined, props) : null}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={iconHref}></use>
      </svg>
      {props.type !== 'emoji' ? <input type={props.type} /> : null}
    </label >
  )
}
function initEmoji(props) {
  props.onClick()
}