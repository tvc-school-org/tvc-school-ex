import React, { Component } from 'react'
import './style.css'
import MenuItem from './MenuItem'
import items from '../../../menu-data'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: items,
    }
  }

  render() {
    const renderItems = this.state.menuItems.map((i, index) => (
      <MenuItem
        key={index}
        title={i.title}
        description={i.description}
        price={i.price}
      />
    ))
    return (
      <div className='menu'>
        <h2>Our Menu</h2>
        {renderItems}
      </div>
    )
  }
}
export default Menu
