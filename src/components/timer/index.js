import React from 'react'
import PropTypes from 'prop-types'
import { CountdownTimer } from './components'

const Timer = ({ type, start, isPaused }) => {
  switch (type) {
    case 'countdown':
    default:
      return <CountdownTimer start={start} isPaused={isPaused} />
  }
}

Timer.propTypes = {
  type: PropTypes.oneOf(['countdown']),
  isPaused: PropTypes.bool,
  start: PropTypes.shape({ hour: PropTypes.number, min: PropTypes.number, second: PropTypes.number })
}

Timer.defaultProps = {
  type: 'countdown',
  isPaused: false,
  start: {
    hour: 0,
    min: 0,
    second: 0
  }
}

export default Timer
