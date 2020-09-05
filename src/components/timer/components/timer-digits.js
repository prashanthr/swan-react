import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TimerDigits = ({ digits }) => {
  const Digit = ({ digit }) => (
    <span className={`swan-timer-basic-digit`}>
      {digit}
    </span>
  )
  const digitEntries = digits.toString().length === 1
    ? `0${digits}`.split('')
    : digits.toString().split('')
  return (
    <div>
      {digitEntries.map(digit => (
        <Digit digit={digit} />
      ))}
    </div>
  )
}

export default TimerDigits
