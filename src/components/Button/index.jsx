import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Button = ({ text = 'View more', onSubmit }) => {
  return (
    <button 
      className="card-button"
      onSubmit={onSubmit}
    >
        {text.toUpperCase()}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onSubmit: PropTypes.func
}

export default Button