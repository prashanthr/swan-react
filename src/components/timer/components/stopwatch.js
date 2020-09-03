import React from 'react'
import PropTypes from 'prop-types'
import TimerDigits from './timer-digits'
import { useTimer } from '../effects/timer'
import './index.css'

const StopWatch = ({ start, separator, isPaused }) => {
  const { hour, minute, second } = useTimer({ start, isPaused, countdown: false })
  return (
    <div className='swan-timer-basic-wrap'>
      <TimerDigits digits={hour} />
      {separator}
      <TimerDigits digits={minute} />
      {separator}
      <TimerDigits digits={second} />
    </div>
  )
}

StopWatch.propTypes = {
  separator: PropTypes.string,
  isPaused: PropTypes.bool,
  start: PropTypes.shape({ hour: PropTypes.number, minute: PropTypes.number, second: PropTypes.number })
}

StopWatch.defaultProps = {
  separator: ':',
  isPaused: false
}

export default StopWatch
