import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TrackInfo = ({ track, artist, album }) => (
  <div className='swan-audio-player-track-info-grid'>
    <span className='swan-audio-player-track-info-artist'>{artist}</span><br />
    <span className='swan-audio-player-track-info-track'>{track}</span><br />
    <span className='swan-audio-player-track-info-album'>{album}</span>
  </div>
)

TrackInfo.propTypes = {
  album: PropTypes.string,
  artist: PropTypes.string,
  track: PropTypes.string
}

TrackInfo.defaultProps = {
  album: '',
  artist: '',
  track: '',
}

export default TrackInfo
