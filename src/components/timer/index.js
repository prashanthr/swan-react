import React from 'react'
import PropTypes from 'prop-types'
import { CountdownTimer, StopWatch } from './components'

const Timer = ({ type, start, isPaused }) => {
  switch (type) {
    case 'stopwatch':
      return <StopWatch start={start} isPaused={isPaused} />
    case 'countdown':
    default:
      return <CountdownTimer start={start} isPaused={isPaused} />
  }
}

Timer.propTypes = {
  type: PropTypes.oneOf(['countdown', 'stopwatch']),
  isPaused: PropTypes.bool,
  start: PropTypes.shape({ hour: PropTypes.number, minute: PropTypes.number, second: PropTypes.number })
}

Timer.defaultProps = {
  type: 'countdown',
  isPaused: false,
  start: {
    hour: 0,
    minute: 0,
    second: 0
  }
}

export default Timer
