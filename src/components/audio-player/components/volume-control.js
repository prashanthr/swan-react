import React, { cloneElement, createRef } from 'react'
import PropTypes from 'prop-types'
import Button from '../../button'
import volumeFullSvg from '../assets/volume-full.svg'
import volumeOffSvg from '../assets/volume-off.svg'

const VolumeControl = (props) => {
  const {
    customComponent,
    className = '',
    progressClassName = '',
    level,
    isMuted = false,
    onToggleMute,
    onVolumeChange
  } = props

  let volumeProgressRef = createRef()

  return (
    (
      customComponent && cloneElement(<customComponent />, {
        onToggleMute,
        onVolumeChange,
        isMuted,
        level
      })
    )
    || (
      <div className={className}>
        <Button
          className='swan-audio-player-button'
          value={<img src={isMuted ? volumeOffSvg : volumeFullSvg} />}
          onClick={onToggleMute}
        />
        <progress
          className={`swan-audio-player-player-controls-volume-progress ${progressClassName}`}
          role={'none'}
          onKeyPress={() => {}}
          ref={el => { volumeProgressRef = el }}
          onClick={e => onVolumeChange(e, volumeProgressRef)}
          value={isMuted ? 0 : level}
          max={1}
        />
      </div>
    )
  )
}

VolumeControl.propTypes = {
  customComponent: PropTypes.element,
  className: PropTypes.string,
  progressClassName: PropTypes.string,
  level: PropTypes.number,
  isMuted: PropTypes.bool,
  onToggleMute: PropTypes.func,
  onVolumeChange: PropTypes.func
}

VolumeControl.defaultProps = {
  className: '',
  progressClassName: '',
  isMuted: false
}

export default VolumeControl