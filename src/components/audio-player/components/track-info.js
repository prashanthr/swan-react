import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TrackInfo = ({ track, artist }) => (
  <div className='swan-audio-player-track-info'>
    <span className='swan-audio-player-track-info-artist'>{artist}</span><br />
    <span className='swan-audio-player-track-info-track'>{track}</span>
  </div>
)

export default TrackInfo
