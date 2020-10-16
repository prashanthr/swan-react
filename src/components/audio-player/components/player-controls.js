import React from 'react'
import PropTypes from 'prop-types'
import PlayPause from './play-pause'
import VolumeControl from './volume-control'
import ProgressBar from './progress'
import Duration from './duration'
import './index.css'


const PlayerControls = ({ onPlayPause, isPlaying = false, currentTime, duration, onProgressSeek, isMuted, volumeLevel, onToggleMute, onVolumeChange }) => (
  <div className='swan-audio-player-controls'>
    <PlayPause onPlayPause={onPlayPause} isPlaying={isPlaying} />
    <div className='swan-audio-player-progress-wrap'>
      <ProgressBar onProgressSeek={onProgressSeek} currentTime={currentTime} duration={duration} />
      <Duration current={currentTime} total={duration} />
    </div>
    <VolumeControl isMuted={isMuted} level={volumeLevel} onToggleMute={onToggleMute} onVolumeChange={onVolumeChange} />
  </div>
)

export default PlayerControls
