import React from 'react'
import PropTypes from 'prop-types'
import { CountdownTimer, StopWatch, Progress } from './components'

const Timer = ({ type, start, isPaused, large }) => {
  switch (type) {
    case 'progress':
      return <Progress start={start} isPaused={isPaused} />
    case 'stopwatch':
      return <StopWatch start={start} isPaused={isPaused} large={large} />
    case 'countdown':
    default:
      return <CountdownTimer start={start} isPaused={isPaused} large={large} />
  }
}

Timer.propTypes = {
  type: PropTypes.oneOf(['countdown', 'stopwatch']),
  isPaused: PropTypes.bool,
  large: PropTypes.bool,
  start: PropTypes.shape({ hour: PropTypes.number, minute: PropTypes.number, second: PropTypes.number })
}

Timer.defaultProps = {
  type: 'countdown',
  isPaused: false,
  large: false,
  start: {
    hour: 0,
    minute: 0,
    second: 0
  }
}

export default Timer
