import React from 'react'
import PropTypes from 'prop-types'
import { CountdownTimer } from './components'

const Timer = ({ type, start }) => {
  switch (type) {
    case 'countdown':
    default:
      return <CountdownTimer start={start} />
  }
}

Timer.propTypes = {
  type: PropTypes.oneOf(['countdown']),
  start: PropTypes.shape({ hour: PropTypes.number, min: PropTypes.number, second: PropTypes.number })
}

Timer.defaultProps = {
  type: 'countdown',
  start: {
    hour: 0,
    min: 0,
    second: 15
  }
}

export default Timer
