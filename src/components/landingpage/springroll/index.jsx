import React from 'react'
import '../style.css'
import PropTypes from 'prop-types';

const SpringrollComponent = ({ title, description, heading, imgSrc } = {}) => {
  return (
    <section className="headercard landing-page-wrapper-left grid-component"> 
        <img src={imgSrc} alt="Nigiri" className="img grid-column-left"></img>
        <div className="card-content-left">
          <h3 className="card-heading" style={{ alignSelf: 'end'}}>{heading.toUpperCase()}</h3>
          <h1 className="card-title">{title.toUpperCase()}</h1>
          <p className="card-description" style={{ alignSelf: 'start'}}>{description}</p>
          <button className="card-button">{"View more".toUpperCase()}</button>
        </div>
    </section>
    )
}

SpringrollComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  heading: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

export default SpringrollComponent