import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ text, className }) => (
  <span className={className}>
    {text}
  </span>
)

Text.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

Text.defaultProps = {
  className: '',
  text: ''
}

export default Text
