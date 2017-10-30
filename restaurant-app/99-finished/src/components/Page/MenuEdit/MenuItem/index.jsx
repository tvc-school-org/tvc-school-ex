import React from 'react'
import './style.css'

const MenuItem = ({ index, title, description, price, handleItemChange }) => {
  const handleChange = (fieldName, value) => {
    handleItemChange(index, fieldName, value)
  }
  return (
    <div className='menu-item'>
      <div className='menu-item-left'>
        <input type='text' value={title} onChange={(event) => handleChange('title', event.target.value)} className='menu-item-title' /><br/>
        <input type='text' value={description} onChange={(event) => handleChange('description', event.target.value)} className='menu-item-description' />
      </div>
      <input type='text' value={price} onChange={(event) => handleChange('price', event.target.value)} className='menu-item-right' />
    </div>
  )
}

export default MenuItem
