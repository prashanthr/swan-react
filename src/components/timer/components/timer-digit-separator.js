import React from 'react'
import PropTypes from 'prop-types'

const TimerDigitSepartor = ({ separator, className }) => (
  <span className={className}>
    {separator}
  </span>
)

TimerDigitSepartor.propTypes = {
  separator: PropTypes.string,
  className: PropTypes.string
}

TimerDigitSepartor.defaultProps = {
  separator: ':',
  className: ''
}

export default TimerDigitSepartor
