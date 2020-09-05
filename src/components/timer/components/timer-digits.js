import React from 'react'
import PropTypes from 'prop-types'
import './timer-digits.css'

const TimerDigits = ({ digits, className }) => {
  const Digit = ({ digit }) => (
    <span className={`swan-timer-basic-digit ${className}`}>
      {digit}
    </span>
  )
  const digitEntries = digits.toString().length === 1
    ? `0${digits}`.split('')
    : digits.toString().split('')
  return (
    <div>
      {digitEntries.map((digit, index) => (
        <Digit key={index} digit={digit} />
      ))}
    </div>
  )
}

TimerDigits.propTypes = {
  className: PropTypes.string,
  digits: PropTypes.number
}

TimerDigits.defaultProps = {
  className: '',
}

export default TimerDigits
