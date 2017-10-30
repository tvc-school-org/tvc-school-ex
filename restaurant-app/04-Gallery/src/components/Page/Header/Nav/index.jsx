import React from 'react'
import './style.css'
// import button from '../../button'

const Nav = (props) => {
  return (
    <ul className='nav-ul'>
      <li><button className='button' href='#menu'>Menu</button></li>
      <li><button className='button' href='#gallery'>Gallery</button></li>
      <li><button className='button' href='#location'>Location</button></li>
      <li><button className='button' href='#our-story'>Our Story</button></li>
    </ul>
  )
}

export default Nav
