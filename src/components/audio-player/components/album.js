import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Album = ({ albumArt }) => (
  <div className='swan-audio-player-album-grid'>
    <div
      className='swan-audio-player-album'
      style={albumArt ? { backgroundImage: `url(${albumArt})` } : {}}
    />
  </div>
)

export default Album
