import React from 'react'
import PropTypes from 'prop-types'
import { useTimer } from '../effects/timer'
import './index.css'


const CircularProgressTimer = ({ start, separator, isPaused }) => (
  <div>

  </div>
)

const LinearProgressTimer = ({ start, separator, isPaused }) => (
  <div>

  </div>
)

const ProgressTimer = ({ start, separator, isPaused, type }) => {
  switch(type) {
    case 'linear':
      return <LinearProgressTimer start={start} isPaused={isPaused} />
    case 'circular':
    default: <CircularProgressTimer start={start} isPaused={isPaused} />
  }
}

ProgressTimer.propTypes = {
  type: PropTypes.oneOf(['linear', 'circular'])
}
ProgressTimer.defaultProps = {
  type: 'circular'
}

export default ProgressTimer
