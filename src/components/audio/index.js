import React from 'react'
import PropTypes from 'prop-types'

const Audio = ({
  onLoadedMetadata,
  elRef,
  src,
  sources,
  tracks,
  showControls,
  onPlay,
  onVolumeChange,
  onTimeUpdate,
  className
}) => (
  <audio
    onLoadedMetadata={onLoadedMetadata}
    ref={el => elRef && elRef(el)}
    onPlay={onPlay}
    onTimeUpdate={onTimeUpdate}
    onVolumeChange={onVolumeChange}
    className={className}
    controls={showControls}
    src={src}
  >
    {sources.map((source, idx) => (
      <source
        key={idx}
        src={source.src}
        type={source.type}
      />
    ))}
    {tracks.map((track, idx) => (
      <track
        key={idx}
        src={track.src}
        kind={track.kind}
        srcLang={track.srclang}
        label={track.label}
      />
    ))}
  </audio>
)

Audio.propTypes = {
  elRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  src: PropTypes.string,
  sources: PropTypes.array,
  tracks: PropTypes.array,
  showControls: PropTypes.bool,
  onPlay: PropTypes.func,
  onVolumeChange: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
  className: PropTypes.string,
}

Audio.defaultProps = {
  className: '',
  showControls: false,
  tracks: [{ kind: 'captions' }],
  sources: []
}

export default Audio
