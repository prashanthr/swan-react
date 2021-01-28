import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import Button from '../../button'
import playSvg from '../assets/play.svg'
import pauseSvg from '../assets/pause.svg'

const PlayPause = ({ onPlayPause, isPlaying, CustomComponent }) => (
  CustomComponent
  ? (cloneElement(<CustomComponent />, { onPlayPause, isPlaying }))
  : <Button
      className='swan-audio-player-button'
      value={<img src={isPlaying ? pauseSvg : playSvg} />}
      onClick={onPlayPause}
    />
)

PlayPause.propTypes = {
  isPlaying: PropTypes.bool,
  CustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
}

PlayPause.defaultProps = {
  isPlaying: false
}

export default PlayPause
