import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../button'
import playSvg from '../assets/play.svg'
import pauseSvg from '../assets/pause.svg'

const PlayPause = ({ onPlayPause, isPlaying = false }) => (
  <Button
    className='swan-audio-player-button'
    value={<img src={isPlaying ? pauseSvg : playSvg} />}
    onClick={onPlayPause}
  />
)

export default PlayPause
