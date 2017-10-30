import React, { Component } from 'react'
import './style.css'
import MenuItem from './MenuItem'
import items from '../../../menu-data'

const MenuEdit = (props) => {



  const renderItems = props.menuItems.map((i, index) => (
    <MenuItem
      key={index}
      index={index}
      title={i.title}
      description={i.description}
      price={i.price}
      handleItemChange={props.handleMenuItemChange}
    />
  ))
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      <button
        onClick={props.handleEditMenuClick}
      >Done</button>
      {renderItems}
    </div>
  )
}
export default MenuEdit
