import React from 'react'
import './style.css'

const galleryItem = (props) => {
  let { title, description, image, price } = props.item

  return (
    <div className='gallery-item'>
      <img className='gallery-item-image img-responsive' src={image}  alt={title}/>
      <div className='gallery-item-title'>{title}</div>
      <div className='gallery-item-description'>{description}</div>
      <div>{price}</div>
    </div>
  )
}

export default galleryItem
