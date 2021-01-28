import React from 'react'
import PropTypes from 'prop-types'

const TrackInfo = ({ track, artist, album, className }) => (
  <div className={`swan-audio-player-track-info-grid ${className}`}>
    <span className='swan-audio-player-track-info-track'>{track}</span><br />
    <span className='swan-audio-player-track-info-artist'>{artist}</span><br />
    <span className='swan-audio-player-track-info-album'>{album}</span>
  </div>
)

TrackInfo.propTypes = {
  album: PropTypes.string,
  artist: PropTypes.string,
  track: PropTypes.string,
  className: PropTypes.string
}

TrackInfo.defaultProps = {
  album: '',
  artist: '',
  track: '',
  className: ''
}

export default TrackInfo
