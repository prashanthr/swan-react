import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../button'
import './index.css'
import volumeFullSvg from '../assets/volume-full.svg'
import volumeOffSvg from '../assets/volume-off.svg'

const VolumeControl = ({ className = '', level, isMuted = false, onToggleMute, onVolumeChange }) => {
  let volumeProgressRef = null
  return (
    <div className={className}>
      <Button
        className='swan-audio-player-button'
        value={<img src={isMuted ? volumeOffSvg : volumeFullSvg} />}
        onClick={onToggleMute}
      />
      <progress
        className='swan-audio-player-player-controls-volume-progress'
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
