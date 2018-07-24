import React from 'react'

export default function (props) {
  let selfProps = { iconHref: '', inputType: '' }
  if (props.type === 'color') {
    selfProps.iconHref = '#icon-textcolor'
    selfProps.inputType = 'color'
  } else if (props.type === 'file') {
    selfProps.iconHref = '#icon-doc'
    selfProps.inputType = 'file'
  } else if (props.type === 'emoji') {
    selfProps.iconHref = '#icon-emoji'
  }
  return (
    <label>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={selfProps.iconHref}></use>
      </svg>
      {props.type === 'emoji' ?
        <div className="emojisBox"></div> :
        <input type={selfProps.inputType} />
      }
    </label>
  )
}