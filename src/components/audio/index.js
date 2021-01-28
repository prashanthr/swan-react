import React from 'react'
import PropTypes from 'prop-types'

const Audio = ({
  elRef,
  className,
  src,
  sources,
  tracks,
  showControls,
  autoPlay,
  crossOriginMethod,
  shouldLoop,
  muted,
  preloadMethod,
  onLoadedMetadata,
  onCanPlay,
  onPlay,
  onVolumeChange,
  onTimeUpdate,
  onEnded,
  onRateChange,
  onSeeked,
  onSeeking,
  onStalled,
  onSuspend,
  onWaiting
}) => (
  <audio
    ref={elRef}
    className={className}
    controls={showControls}
    src={src}
    crossOrigin={crossOriginMethod}
    loop={shouldLoop}
    muted={muted}
    preload={preloadMethod}
    autoPlay={autoPlay}
    onLoadedMetadata={onLoadedMetadata}
    onCanPlay={onCanPlay}
    onPlay={onPlay}
    onRateChange={onRateChange}
    onSeeked={onSeeked}
    onSeeking={onSeeking}
    onStalled={onStalled}
    onSuspend={onSuspend}
    onWaiting={onWaiting}
    onVolumeChange={onVolumeChange}
    onTimeUpdate={onTimeUpdate}
    onEnded={onEnded}
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
  className: PropTypes.string,
  autoPlay: PropTypes.bool,
  crossOriginMethod: PropTypes.oneOf(['anonymous', 'use-credentials']),
  shouldLoop: PropTypes.bool,
  muted: PropTypes.bool,
  preloadMethod: PropTypes.oneOf(['none', 'metadata', 'auto']),
  src: PropTypes.string,
  sources: PropTypes.array,
  tracks: PropTypes.array,
  showControls: PropTypes.bool,
  onLoadedMetadata: PropTypes.func,
  onCanPlay: PropTypes.func,
  onPlay: PropTypes.func,
  onVolumeChange: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onEnded: PropTypes.func,
  onRateChange: PropTypes.func,
  onSeeked: PropTypes.func,
  onSeeking: PropTypes.func,
  onStalled: PropTypes.func,
  onSuspend: PropTypes.func,
  onWaiting: PropTypes.func
}

Audio.defaultProps = {
  className: '',
  autoPlay: false,
  showControls: true,
  tracks: [{ kind: 'captions' }],
  sources: []
}

export default Audio
