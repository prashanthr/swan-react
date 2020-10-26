import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ value, currentTime, duration, onProgressSeek, className }) => {
  let progressRef = null
  return (
    <progress
      role={'none'}
      onKeyPress={() => {}}
      id='swan-audio-player-progress'
      ref={el => { progressRef = el }}
      onClick={e => onProgressSeek(e, progressRef)}
      className={`swan-audio-player-progress ${className}`}
      value={currentTime}
      max={duration}
    />
  )
}

export default ProgressBar
