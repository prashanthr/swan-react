import React from 'react'
import PropTypes from 'prop-types'
import TimerDigits from './timer-digits'
import { useTimer } from '../effects/timer'
import './index.css'

const CountdownTimer = ({ start, separator, isPaused, large }) => {
  const { hour, minute, second } = useTimer({ start, isPaused, countdown: true })
  return (
    <div className={`swan-timer-basic-wrap ${large ? 'swan-timer-basic-wrap-large' : ''}`}>
      <TimerDigits digits={hour} />
      {separator}
      <TimerDigits digits={minute} />
      {separator}
      <TimerDigits digits={second} />
    </div>
  )
}

CountdownTimer.propTypes = {
  separator: PropTypes.string,
  isPaused: PropTypes.bool,
  large: PropTypes.bool,
  start: PropTypes.shape({ hour: PropTypes.number, minute: PropTypes.number, second: PropTypes.number })
}

CountdownTimer.defaultProps = {
  separator: ':',
  isPaused: false,
  large: false
}

export default CountdownTimer
