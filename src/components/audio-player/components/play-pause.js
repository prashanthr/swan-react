import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import Button from '../../button'
import playSvg from '../assets/play.svg'
import pauseSvg from '../assets/pause.svg'

const PlayPause = ({ onPlayPause, isPlaying, customComponent }) => (
  customComponent
  ? (cloneElement(<customComponent />, { onClose }))
  : <Button
      className='swan-audio-player-button'
      value={<img src={isPlaying ? pauseSvg : playSvg} />}
      onClick={onPlayPause}
    />
)

PlayPause.propTypes = {
  isPlaying: PropTypes.bool,
  customComponent: PropTypes.element
}

PlayPause.defaultProps = {
  isPlaying: false
}

export default PlayPause
