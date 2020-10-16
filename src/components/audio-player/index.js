import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Audio } from '../audio'
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
  pin,
  pinDirection
}) => {
  const [playerState, setPlayerState] = useState({
    audioRef: useRef(null),
    isPlaying: false,
    currentTime: 0,
    duration: null,
    isMuted: false,
    volume: 1
  })
  const { audioRef, isPlaying, isMuted, volume, duration, currentTime } = playerState
  return (
    <div className='swan-audio-player'>
      <div className='swan-audio-player-components'>
        <Album albumArt={albumArtSrc} />
        <TrackInfo track={trackSrc} artist={artist} />
        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={() => onPlayPause({ playerState, setPlayerState })}
          duration={duration}
          currentTime={currentTime}
          onProgressSeek={(event, element) => onProgressSeek({ event, element, playerState, setPlayerState })}
          isMuted={isMuted}
          volumeLevel={volume}
          onToggleMute={() => onToggleMute({ playerState, setPlayerState })}
          onVolumeChange={(event, element) => onVolumeChange({ event, element, playerState, setPlayerState })}
        />
      </div>
      <Audio
        ref={audioRef}
        src={trackSrc}
        className='swan-audio-element'
        onLoadedMetadata={(event) => onLoadedMetadata({ event, playerState, setPlayerState })}
        onTimeUpdate={() => onTimeUpdate({ playerState, setPlayerState })}
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
  pin: PropTypes.bool,
}

AudioPlayer.defaultProps = {
  trackType: 'mp3',
  className: ''
}

export default AudioPlayer
