import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../button'
import './index.css'

const PlayPause = ({ onPlayPause, isPlaying = false }) => (
  <Button
    className={`${isPlaying ? 'swan-audio-player-pause-btn' : 'swan-audio-player-play-btn'}`}
    onClick={onPlayPause}
  />
)

export default PlayPause
