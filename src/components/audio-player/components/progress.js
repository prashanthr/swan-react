import React, { createElement, createRef } from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ value, currentTime, duration, onProgressSeek, className, customComponent }) => {
  let progressRef = createRef()
  return (
    (
      customComponent && createElement(<customComponent />, {
        value,
        currentTime,
        duration,
        onProgressSeek
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
  customComponent: PropTypes.element
}

ProgressBar.defaultProps = {
  className: ''
}

export default ProgressBar
