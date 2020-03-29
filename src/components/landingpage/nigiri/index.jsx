import React from 'react'
import './style.css'
import { uppercaseString } from '../../../utils/uppercaseString'

const NigiriComponent = ({ title, description, heading, imgSrc } = {}) => {
  return (
      <div className="regular-dealcard grid-component">
        <img src={imgSrc} alt="Nigiri" className="img"></img>
        <h3 className="card-heading">{uppercaseString(heading)}</h3>
        <h1 className="card-title">{uppercaseString(title)}</h1>
        <p className="card-description">{description}</p>
        <button className="card-button">{uppercaseString('View more')}</button>
      </div>
    )
}

export default NigiriComponent