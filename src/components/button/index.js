import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Button = ({ withBorder, onClick, isDisabled, className, value }) => (
  <button
    onClick={onClick}
    className={`swan-react-button ${!withBorder ? 'swan-react-button-unbordered' : ''} ${className}`}
    disabled={!!isDisabled}
  >
    {value}
  </button>
)

Button.propTypes = {
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  withBorder: PropTypes.bool,
}

Button.defaultProps = {
  isDisabled: false,
  withBorder: false,
  className: ''
}

export default Button
