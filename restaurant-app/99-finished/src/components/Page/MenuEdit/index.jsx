import React, { Component } from 'react'
import './style.css'
import MenuItem from './MenuItem'
import items from '../../../menu-data'
import Button from '../Button'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: items,
    }
  }

  render() {
    const handleItemChange = (index, fieldName, value) => {
      let newMenuItems = this.state.menuItems
      newMenuItems[index][fieldName] = value
      this.setState({
        menuItems: newMenuItems,
      })
    }
    const renderItems = this.state.menuItems.map((i, index) => (
      <MenuItem
        key={index}
        index={index}
        title={i.title}
        description={i.description}
        price={i.price}
        handleItemChange={handleItemChange}
      />
    ))
    return (
      <div className='menu'>
        <h2>Our Menu</h2>
        <Button
          onClick={this.props.handleEditMenuClick}
          >Done</Button>
        {renderItems}
      </div>
    )
  }
}
export default Menu
