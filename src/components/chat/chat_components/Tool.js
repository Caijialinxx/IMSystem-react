import React from 'react'
import './EmojisBox.css'

let iconfont_emoji = document.createElement('script')
iconfont_emoji.src = '//at.alicdn.com/t/font_606596_4iofyd5c9w94quxr.js'
document.head.appendChild(iconfont_emoji)

export default function (props) {
  let selfProps = { iconHref: '', inputType: '', clickEvent: null }
  if (props.type === 'color') {
    selfProps.iconHref = '#icon-textcolor'
    selfProps.inputType = 'color'
  } else if (props.type === 'file') {
    selfProps.iconHref = '#icon-doc'
    selfProps.inputType = 'file'
  } else if (props.type === 'emoji') {
    selfProps.iconHref = '#icon-emoji'
    selfProps.clickEvent = initEmoji
  }
  return (
    <label onClick={selfProps.clickEvent}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={selfProps.iconHref}></use>
      </svg>
      {props.type === 'emoji' ?
        <div id='emojisBox' className="emojisBox"></div> :
        <input type={selfProps.inputType} />
      }
    </label>
  )
}
function initEmoji() {
  let box = document.getElementById('emojisBox'),
    docFragment = document.createDocumentFragment()
  let index
  for (let i = 1; i <= 30; i++) {
    if (i < 10) { index = '0' + i }
    else { index = String(i) }
    let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    iconSvg.innerHTML = '<use xlink:href="#icon-emoji-' + index + '"></use>'
    docFragment.appendChild(iconSvg)
  }
  box.appendChild(docFragment)
  box.style.display = 'block'
}