import React, { createElement, createRef } from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ value, currentTime, duration, onProgressSeek, className, CustomComponent }) => {
  let progressRef = createRef()
  return (
    (
      CustomComponent && createElement(<CustomComponent />, {
        value,
        currentTime,
        duration,
        onProgressSeek,
        className
      })
    ) || <progress
          role={'none'}
          onKeyPress={() => {}}
          id='swan-audio-player-progress'
          ref={progressRef}
          onClick={e => onProgressSeek(e, progressRef)}
          className={`swan-audio-player-progress ${className}`}
          value={currentTime}
          max={duration}
        />
  )
}

ProgressBar.propTypes = {
  value: PropTypes.number,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  onProgressSeek: PropTypes.func,
  className: PropTypes.string,
  CustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}

ProgressBar.defaultProps = {
  className: ''
}

export default ProgressBar
