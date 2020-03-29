import React from 'react'
import '../style.css'
import PropTypes from 'prop-types';

const NigiriComponent = ({ title, description, heading, imgSrc } = {}) => {
  return (
    <section className="regular-dealcard landing-page-wrapper-right grid-component"> 
        <img className='img grid-column-right' src={imgSrc} alt="Nigiri"></img>
        <div className="card-content-right">
          <h3 className="card-heading" style={{ alignSelf: 'end'}} >{heading.toUpperCase()}</h3>
          <h1 className="card-title">{title.toUpperCase()}</h1>
          <p className="card-description" style={{ alignSelf: 'start'}}>{description}</p>
          <button className="card-button">{"View more".toUpperCase()}</button>
        </div>
    </section>
    )
}

NigiriComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  heading: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

export default NigiriComponent