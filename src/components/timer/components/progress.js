import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useTimer } from '../effects/timer'
import TimerDigits from './timer-digits'
import TimerDigitSepartor from './timer-digit-separator'
import { getProgressCircleDashArray } from '../utils/progress'
import './timer-progress.css'

const CircularProgressTimer = ({ start, current, separator, isPaused, strokeColor, className, digitClassName, svgPathStrokeDashArray = 283 }) => {
  const { hour, minute, second } = current
  return (
    <div className={`swan-timer-progress-circular ${className}`}>
      <svg className='swan-timer-progress-circular__svg' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <g className='swan-timer-progress-circular__circle'>
          <circle className='swan-timer-progress-circular__path-elapsed' cx='50' cy='50' r='45'></circle>
          <path
            id='swan-timer-progress-circular-path-remaining'
            strokeDasharray={svgPathStrokeDashArray}
            color={strokeColor}
            className={`swan-timer-progress-circular__path-remaining`}
            d='
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            '
          ></path>
        </g>
      </svg>
      <span id='swan-timer-progress-circular-label' className='swan-timer-progress-circular__label'>
        {[hour, minute, second].map((digits, index) => (
          <Fragment key={index}>
            <TimerDigits className={digitClassName} digits={digits} />
            {index !== Object.keys(current).length - 1 && (
              <TimerDigitSepartor separator={separator} className={digitClassName} />
            )}
          </Fragment>
        ))}
      </span>
    </div>
  )
}

const ProgressTimer = ({ start, separator, isPaused, type, strokeColor, className, digitClassName }) => {
  const time = useTimer({ start, isPaused, countdown: true })
  const svgPathStrokeDashArray = getProgressCircleDashArray(time, start)
  switch(type) {
    case 'circular':
    default:
      return (
        <CircularProgressTimer
          className={className}
          digitClassName={digitClassName}
          svgPathStrokeDashArray={svgPathStrokeDashArray}
          separator={separator}
          start={start}
          current={time}
          isPaused={isPaused}
          strokeColor={strokeColor}
        />
    )
  }
}

ProgressTimer.propTypes = {
  type: PropTypes.oneOf(['circular']),
  className: PropTypes.string,
  digitClassName: PropTypes.string,
  separator: PropTypes.string,
  strokeColor: PropTypes.string
}
ProgressTimer.defaultProps = {
  type: 'circular',
  className: '',
  digitClassName: '',
  separator: ':',
  strokeColor: 'green'
}

export default ProgressTimer
