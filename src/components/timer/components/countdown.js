import React from 'react'
import PropTypes from 'prop-types'
import { useTimer } from '../effects/timer'
import './index.css'

const TimerDigits = ({ digits }) => {
  const Digit = ({ digit }) => (
    <span className='swan-timer-countdown-digit'>
      {digit}
    </span>
  )
  const digitEntries = digits.toString().length === 2
    ? digits.toString().split('')
    : `0${digits}`.split('')
  return (
    <div>
      <Digit digit={digitEntries[0]} />
      <Digit digit={digitEntries[1]} />
    </div>
  )
}

const CountdownTimer = ({ start, separator, isPaused }) => {
  const { hour, min, second } = useTimer(start, isPaused)
  return (
    <div className='swan-timer-countdown-wrap'>
      <TimerDigits digits={hour} />
      {separator}
      <TimerDigits digits={min} />
      {separator}
      <TimerDigits digits={second} />
    </div>
  )
}

CountdownTimer.propTypes = {
  separator: PropTypes.string,
  isPaused: PropTypes.bool,
  start: PropTypes.shape({ hour: PropTypes.number, min: PropTypes.number, second: PropTypes.number })
}

CountdownTimer.defaultProps = {
  separator: ':',
  isPaused: false
}

export default CountdownTimer
