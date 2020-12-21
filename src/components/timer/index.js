import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Countdown, StopWatch, Progress } from './components'
import tick from './effects/tick'

const Timer = ({ type, start, isPaused, large, className, digitClassName }) => {
  const { hour, minute, second } = start
  const isCountdown = (type) => {
    switch (type) {
      case 'stopwatch':
        return false
      case 'progress':
      case 'countdown':
      default:
        return true
    }
  }
  const [currentTime, setTime] = useState({ hour, minute, second })
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(tick({ time: currentTime, countdown: isCountdown(type), isPaused }))
    }, 1000)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  })
  switch (type) {
    case 'progress':
      return <Progress className={className} digitClassName={digitClassName} start={start} currentTime={currentTime} isPaused={isPaused} />
    case 'stopwatch':
      return <StopWatch className={className} digitClassName={digitClassName} start={start} currentTime={currentTime} isPaused={isPaused} large={large} />
    case 'countdown':
    default:
      return <Countdown className={className} digitClassName={digitClassName} start={start} currentTime={currentTime} isPaused={isPaused} large={large} />
  }
}

Timer.propTypes = {
  type: PropTypes.oneOf(['countdown', 'stopwatch', 'progress']),
  isPaused: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
  digitClassName: PropTypes.string,
  start: PropTypes.shape({ hour: PropTypes.number, minute: PropTypes.number, second: PropTypes.number })
}

Timer.defaultProps = {
  type: 'countdown',
  isPaused: false,
  large: false,
  className: '',
  digitClassName: '',
  start: {
    hour: 0,
    minute: 0,
    second: 0
  }
}

export default Timer
