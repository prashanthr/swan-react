import React from 'react'
import PropTypes from 'prop-types'
import PlayPause from './play-pause'
import VolumeControl from './volume-control'
import ProgressBar from './progress'
import Duration from './duration'

const PlayerControls = ({
  className,
  progressClassName,
  volumeProgressClassName,
  durationClassName,
  playPauseCustomComponent,
  progressCustomComponent,
  volumeCustomComponent,
  durationCustomComponent,
  onPlayPause,
  isPlaying,
  currentTime,
  duration,
  onProgressSeek,
  isMuted,
  volumeLevel,
  onToggleMute,
  onVolumeChange
}) => (
  <div className={`swan-audio-player-player-controls-grid ${className}`}>
    <div className='swan-audio-player-player-controls-play-pause-progress-grid'>
      <PlayPause
        onPlayPause={onPlayPause}
        isPlaying={isPlaying}
        CustomComponent={playPauseCustomComponent}
      />
      <ProgressBar
        className='swan-audio-player-controls-progress'
        onProgressSeek={onProgressSeek}
        currentTime={currentTime}
        duration={duration}
        CustomComponent={progressCustomComponent}
      />
    </div>
    <div className='swan-audio-player-player-controls-volume-duration-grid'>
      <VolumeControl
        className='swan-audio-player-player-controls-volume-grid'
        isMuted={isMuted}
        level={volumeLevel}
        onToggleMute={onToggleMute}
        onVolumeChange={onVolumeChange}
        CustomComponent={volumeCustomComponent}
        progressClassName={volumeProgressClassName}
      />
      <Duration
        className={`swan-audio-player-controls-duration ${durationClassName}`}
        current={currentTime}
        total={duration}
        CustomComponent={durationCustomComponent}
      />
    </div>
  </div>
)

PlayerControls.propTypes = {
  className: PropTypes.string,
  progressClassName: PropTypes.string,
  volumeProgressClassName: PropTypes.string,
  playPauseCustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  progressCustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  volumeCustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  durationCustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  isPlaying: PropTypes.bool,
  onPlayPause: PropTypes.func,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  onProgressSeek: PropTypes.func,
  isMuted: PropTypes.bool,
  volumeLevel: PropTypes.number,
  onToggleMute: PropTypes.func,
  onVolumeChange: PropTypes.func
}

PlayerControls.defaultProps = {
  className: '',
  progressClassName: '',
  volumeProgressClassName: '',
  isPlaying: false,
  isMuted: false
}

export default PlayerControls
