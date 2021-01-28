import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'
import Audio from '../audio'
import TrackInfo from './components/track-info'
import Album from './components/album'
import PlayerControls from './components/player-controls'
import { onVolumeChange } from './effects/volume'
import { onLoadedMetadata } from './effects/metadata'
import { onToggleMute } from './effects/mute'
import { onProgressSeek } from './effects/progress'
import { onTimeUpdate } from './effects/time'
import { onPlayPause } from './effects/play-pause'
import './index.css'

const AudioPlayer = ({
  className,
  trackSrc,
  trackType,
  trackName,
  artist,
  albumArtSrc,
  album,
  albumClassName,
  albumArtClassName,
  trackInfoClassName,
  progressClassName,
  playerControlsClassName,
  volumeProgressClassName,
  playPauseCustomComponent,
  progressCustomComponent,
  volumeCustomComponent,
  durationClassName,
  durationCustomComponent
}) => {
  const [playerState, setPlayerState] = useState({
    audioRef: createRef(),
    isPlaying: false,
    currentTime: 0,
    duration: null,
    isMuted: false,
    volume: 1
  })
  const { audioRef, isPlaying, isMuted, volume, duration, currentTime } = playerState
  return (
    <div className={`swan-audio-player-grid ${className}`}>
        <Album
          albumArt={albumArtSrc}
          className={albumClassName}
          imgClassName={albumArtClassName}
        />
        <TrackInfo
          track={trackName}
          artist={artist}
          album={album}
          className={trackInfoClassName}
        />
        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={() => onPlayPause({ srcFile: trackSrc, playerState, setPlayerState })}
          duration={duration}
          currentTime={currentTime}
          onProgressSeek={(event, element) => onProgressSeek({ event, element, playerState, setPlayerState })}
          isMuted={isMuted}
          volumeLevel={volume}
          onToggleMute={() => onToggleMute({ playerState, setPlayerState })}
          onVolumeChange={(event, element) => onVolumeChange({ event, element, playerState, setPlayerState })}
          playerControlsClassName={playerControlsClassName}
          progressClassName={progressClassName}
          volumeProgressClassName={volumeProgressClassName}
          playPauseCustomComponent={playPauseCustomComponent}
          progressCustomComponent={progressCustomComponent}
          volumeCustomComponent={volumeCustomComponent}
          durationClassName={durationClassName}
          durationCustomComponent={durationCustomComponent}
        />
        <Audio
          elRef={audioRef}
          src={trackSrc}
          className='swan-audio-element'
          onLoadedMetadata={(event) => onLoadedMetadata({ event, playerState, setPlayerState })}
          onTimeUpdate={() => onTimeUpdate({ playerState, setPlayerState })}
          showControls={false}
        />
    </div>
  )
}

AudioPlayer.propTypes = {
  className: PropTypes.string,
  trackSrc: PropTypes.string,
  trackType: PropTypes.string,
  trackName: PropTypes.string,
  artist: PropTypes.string,
  albumArtSrc: PropTypes.string,
  albumClassName: PropTypes.string,
  albumArtClassName: PropTypes.string,
  trackInfoClassName: PropTypes.string,
  progressClassName: PropTypes.string,
  durationClassName: PropTypes.string,
  playerControlsClassName: PropTypes.string,
  volumeProgressClassName: PropTypes.string,
  playPauseCustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  progressCustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  volumeCustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  durationCustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  // pin: PropTypes.bool, // Not implemented yet
  // pinDirection // Not implemented yet
}

AudioPlayer.defaultProps = {
  trackType: 'mp3',
  className: '',
  albumClassName: '',
  albumArtClassName: '',
  trackInfoClassName: '',
  playerControlsClassName: '',
  progressClassName: '',
  volumeProgressClassName: '',
  durationClassName: ''
}

export default AudioPlayer
