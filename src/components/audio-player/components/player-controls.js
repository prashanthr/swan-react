import React from 'react'
import PropTypes from 'prop-types'
import PlayPause from './play-pause'
import VolumeControl from './volume-control'
import ProgressBar from './progress'
import Duration from './duration'

const PlayerControls = ({ onPlayPause, isPlaying = false, currentTime, duration, onProgressSeek, isMuted, volumeLevel, onToggleMute, onVolumeChange }) => (
  <div className='swan-audio-player-player-controls-grid'>
    <div className='swan-audio-player-player-controls-play-pause-progress-grid'>
      <PlayPause onPlayPause={onPlayPause} isPlaying={isPlaying} />
      <ProgressBar className='swan-audio-player-controls-progress' onProgressSeek={onProgressSeek} currentTime={currentTime} duration={duration} />
    </div>
    <div className='swan-audio-player-player-controls-volume-duration-grid'>
      <VolumeControl className='swan-audio-player-player-controls-volume-grid' isMuted={isMuted} level={volumeLevel} onToggleMute={onToggleMute} onVolumeChange={onVolumeChange} />
      <Duration className='swan-audio-player-controls-duration' current={currentTime} total={duration} />
    </div>
  </div>
)

export default PlayerControls
