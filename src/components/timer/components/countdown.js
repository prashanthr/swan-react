import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TimerDigits from './timer-digits'
import TimerDigitSepartor from './timer-digit-separator'
import { useTimer } from '../effects/timer'
import './timer-basic.css'

const CountdownTimer = ({ start, separator, isPaused, large, className, digitClassName }) => {
  const { hour, minute, second } = useTimer({ start, isPaused, countdown: true })
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

CountdownTimer.propTypes = {
  separator: PropTypes.string,
  isPaused: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
  digitClassName: PropTypes.string,
  start: PropTypes.shape({ hour: PropTypes.number, minute: PropTypes.number, second: PropTypes.number })
}

CountdownTimer.defaultProps = {
  separator: ':',
  className: '',
  digitClassName: '',
  isPaused: false,
  large: false
}

export default CountdownTimer
