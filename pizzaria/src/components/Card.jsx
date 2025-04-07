import React from 'react'
import './Card.css'
const Card = ({
    imgSrc,
    imgAlt,
    title }) => {

    
  return (
    <div className='card-container'>
        <img src={imgSrc} alt={imgAlt} className='card-image' />
        <h1 className='card-title'>{title}</h1>
    </div>
  )
}

export default Card