import React from 'react'
import PropTypes from 'prop-types'
import { Countdown, StopWatch, Progress } from './components'

const Timer = ({ type, start, isPaused, large, className, digitClassName }) => {
  switch (type) {
    case 'progress':
      return <Progress className={className} digitClassName={digitClassName} start={start} isPaused={isPaused} />
    case 'stopwatch':
      return <StopWatch className={className} digitClassName={digitClassName} start={start} isPaused={isPaused} large={large} />
    case 'countdown':
    default:
      return <Countdown className={className} digitClassName={digitClassName} start={start} isPaused={isPaused} large={large} />
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
