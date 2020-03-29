import React from 'react'
import './style.css'
import PropTypes from 'prop-types';

const NigiriComponent = ({ title, description, heading, imgSrc } = {}) => {
  return (
    <div className=''>
      <div className="regular-dealcard grid-component">
        <img src={imgSrc} alt="Nigiri" width="350px" height="250px" className="img"></img>
        <h3 className="card-heading">{heading.toUpperCase()}</h3>
        <h1 className="card-title">{title.toUpperCase()}</h1>
        <p className="card-description">{description}</p>
        <button className="card-button">{"View more".toUpperCase()}</button>
      </div>
    </div>
    )
}

NigiriComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  heading: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

export default NigiriComponent