import React from 'react'
import '../style.css'
import PropTypes from 'prop-types';
import Button from '../../Button'

const SectionContainer = ({ title, description, heading, imgSrc, alt, direction, gridArea, objectFit = true } = {}) => {
  const setObjectFitClass = objectFit ? 'object-fit' : ''
  return (
    <section className={`${gridArea} landing-page-wrapper-${direction} grid-component`}>
        <img className={`img grid-column-${direction} ${setObjectFitClass}`} src={imgSrc} alt={alt}></img>
        <div className={`card-content-${direction}`}>
          <h3 className="card-heading" style={{ alignSelf: 'end'}} >{heading.toUpperCase()}</h3>
          <h1 className="card-title">{title.toUpperCase()}</h1>
          <p className="card-description" style={{ alignSelf: 'start'}}>{description}</p>
          <Button />
        </div>
    </section>
    )
}

SectionContainer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  heading: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  gridArea: PropTypes.string.isRequired,
  objectFit: PropTypes.bool
}

export default SectionContainer