import React from 'react'
import PropTypes from 'prop-types'
import { useTimer } from '../effects/timer'
import TimerDigits from './timer-digits'
import './index.css'

const CircularProgressTimer = ({ start, separator, isPaused, fillColor }) => (
  <div className="base-timer">
      <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g className="base-timer__circle">
        <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          className={`base-timer__path-remaining ${fillColor}`}
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
  </svg>
    <span id="base-timer-label" className="base-timer__label">
      <TimerDigits digits={start.hour} />
      {separator}
      <TimerDigits digits={start.minute} />
      {separator}
      <TimerDigits digits={start.second} />
    </span>
  </div>
)

const ProgressTimer = ({ start, separator, isPaused, type, fillColor }) => {
  const time = useTimer({ start, isPaused, countdown: true })
  switch(type) {
    case 'circular':
    default:
      return (
        <CircularProgressTimer
          separator={separator}
          start={time}
          isPaused={isPaused}
          fillColor={fillColor}
        />
    )
  }
}

ProgressTimer.propTypes = {
  type: PropTypes.oneOf(['circular']),
  separator: PropTypes.string,
  fillColor: PropTypes.string
}
ProgressTimer.defaultProps = {
  type: 'circular',
  separator: ':',
  fillColor: 'green'
}

export default ProgressTimer
