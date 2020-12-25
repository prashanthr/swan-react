import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Button = ({ id, withBorder, onClick, isDisabled, className, value }) => (
  <button
    id={id}
    onClick={onClick}
    className={`swan-react-button ${!withBorder ? 'swan-react-button-unbordered' : ''} ${className}`}
    disabled={isDisabled}
  >
    {value}
  </button>
)

Button.propTypes = {
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  withBorder: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  isDisabled: false,
  withBorder: false,
  className: ''
}

export default Button
