import React from 'react'
import './style.css'
import { uppercaseString } from '../../../utils/uppercaseString'

const NigiriComponent = ({ title, description, heading, imgSrc } = {}) => {
  return (
    <div className=''>
      <div className="regular-dealcard grid-component">
        <img src={imgSrc} alt="Nigiri" width="350px" height="250px" className="img"></img>
        <h3 className="card-heading">{uppercaseString(heading)}</h3>
        <h1 className="card-title">{uppercaseString(title)}</h1>
        <p className="card-description">{description}</p>
        <button className="card-button">View more</button>
      </div>
    </div>
    )
}

export default NigiriComponent