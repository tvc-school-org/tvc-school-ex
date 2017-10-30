import React from 'react'
import './style.css'

const galleryItem = (props) => {
  let { title, description, image, price } = props.item

  return (
    <div className='gallery-item'>
      <img className='gallery-image img-responsive' src={image}  alt={title}/>
      <div className='gallery-title'>{title}</div>
      <div className='gallery-description'>{description}</div>
      <div className='gallery-price'>{price}</div>
    </div>
  )
}

export default galleryItem
