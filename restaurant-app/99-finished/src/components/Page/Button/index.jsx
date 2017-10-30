import React from 'react'
import './style.css'

// text, href, click
const Button = (props) => {
  const button = props.href
    ? <a href={props.href}><button className='button'>{props.children}</button></a>
    : <button className='button' onClick={() => props.onClick()}>{props.children}</button>
    return (
    <div>
      {button}
    </div>
  )
}
export default Button
