import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../button'
import './index.css'

const PlayPause = ({ onPlayPause, isPlaying = false }) => (
  <Button
    withBorder
    className={`swan-audio-player-play-pause-btn ${isPlaying ? 'swan-audio-player-play-pause-btn-play' : 'swan-audio-player-play-pause-btn-pause'}`}
    onClick={onPlayPause}
  />
)

export default PlayPause
