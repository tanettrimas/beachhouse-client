import React from 'react'
import '../style.css'
import PropTypes from 'prop-types';

const CardComponent = ({ title, description, heading, imgSrc, alt, direction, className } = {}) => {
  return (
    <section className={`${className} landing-page-wrapper-${direction} grid-component`}> 
        <img className={`img grid-column-${direction}`} src={imgSrc} alt={alt}></img>
        <div className={`card-content-${direction}`}>
          <h3 className="card-heading" style={{ alignSelf: 'end'}} >{heading.toUpperCase()}</h3>
          <h1 className="card-title">{title.toUpperCase()}</h1>
          <p className="card-description" style={{ alignSelf: 'start'}}>{description}</p>
          <button className="card-button">{"View more".toUpperCase()}</button>
        </div>
    </section>
    )
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  heading: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default CardComponent