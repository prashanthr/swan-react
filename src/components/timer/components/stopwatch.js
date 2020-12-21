import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TimerDigits from './timer-digits'
import TimerDigitSepartor from './timer-digit-separator'
import './timer-basic.css'

const StopWatch = ({ start, currentTime, separator, isPaused, large, className, digitClassName }) => {
  const { hour, minute, second } = currentTime
  return (
    <div
      className={`swan-timer-basic-wrap ${large ? 'swan-timer-basic-wrap-large' : ''} ${className}`}
    >
      {[hour, minute, second].map((digits, index) => (
          <Fragment key={index}>
            <TimerDigits className={digitClassName} digits={digits} />
            {index !== Object.keys(start).length - 1 && (
              <TimerDigitSepartor separator={separator} className={digitClassName} />
            )}
          </Fragment>
      ))}
    </div>
  )
}

StopWatch.propTypes = {
  separator: PropTypes.string,
  large: PropTypes.bool,
  isPaused: PropTypes.bool,
  className: PropTypes.string,
  digitClassName: PropTypes.string,
  start: PropTypes.shape({ hour: PropTypes.number, minute: PropTypes.number, second: PropTypes.number })
}

StopWatch.defaultProps = {
  separator: ':',
  isPaused: false,
  large: false,
  className: '',
  digitClassName: ''
}

export default StopWatch
