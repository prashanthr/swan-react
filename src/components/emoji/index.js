import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({ alt, label, symbol }) => (
  <span
    role='img'
    aria-label={label}
  >
    {symbol}
  </span>
)

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  alt: PropTypes.string,
  label: PropTypes.string
}

Emoji.defaultProps = {
  alt: '',
  label: ''
}

export default Emoji
