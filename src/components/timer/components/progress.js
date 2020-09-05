import React from 'react'
import PropTypes from 'prop-types'
import { useTimer } from '../effects/timer'
import TimerDigits from './timer-digits'
import './index.css'

const CircularProgressTimer = ({ start, current, separator, isPaused, fillColor }) => {
  const calculateTimeFraction = (current, limit) => {
    const getTotal = (time) => (time.second + (time.minute * 60) + (time.hour * 60 * 60))
    console.log('current', 'limit', current, limit, getTotal(current), getTotal(limit))
    return getTotal(current) / getTotal(limit)
  }

  // Update the dasharray value as time passes, starting with 283
  const getCircleDashArray = (current, limit) => {
    const FULL_DASH_ARRAY = 283
    const circleDasharray = `${(
      calculateTimeFraction(current, limit) * FULL_DASH_ARRAY
    ).toFixed(0)} ${FULL_DASH_ARRAY}`
    return circleDasharray
  }
  return (
    <div className="base-timer">
      <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray={`${getCircleDashArray(current, start)}`}
            color={fillColor}
            className={`base-timer__path-remaining`}
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
        <TimerDigits digits={current.hour} />
        {separator}
        <TimerDigits digits={current.minute} />
        {separator}
        <TimerDigits digits={current.second} />
      </span>
    </div>
  )
}

const ProgressTimer = ({ start, separator, isPaused, type, fillColor }) => {
  const time = useTimer({ start, isPaused, countdown: true })
  switch(type) {
    case 'circular':
    default:
      return (
        <CircularProgressTimer
          separator={separator}
          start={start}
          current={time}
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
