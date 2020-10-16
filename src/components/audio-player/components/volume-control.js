import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const VolumeControl = ({ level, isMuted = false, onToggleMute, onVolumeChange }) => {
  let volumeProgressRef = null
  return (
    <div className='swan-audio-player-volume'>
      <button onClick={onToggleMute} className={`swan-audio-player-volume-btn ${isMuted ? 'swan-audio-player-volume-off-btn' : 'swan-audio-player-volume-on-btn'}`} />
      <progress
        className='swan-audio-player-volume-progress'
        role={'none'}
        onKeyPress={() => {}}
        ref={el => { volumeProgressRef = el }}
        onClick={e => onVolumeChange(e, volumeProgressRef)}
        value={isMuted ? 0 : level}
        max={1}
      />
    </div>
  )
}

export default VolumeControl
