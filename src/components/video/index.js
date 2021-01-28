import React from 'react'
import PropTypes from 'prop-types'

const Video = ({
  elRef,
  className,
  width,
  height,
  autoPlay,
  showControls,
  crossOriginMethod,
  shouldLoop,
  muted,
  preloadMethod,
  src,
  sources,
  poster,
  disablePictureInPicture,
  onCanPlay,
  onLoadedMetadata,
  onPlay,
  onPlaying,
  onVolumeChange,
  onTimeUpdate,
  onEnded,
  onRateChange,
  onSeeked,
  onSeeking,
  onStalled,
  onSuspend,
  onWaiting,
}) => (
  <video
    ref={elRef}
    className={className}
    width={width}
    height={height}
    controls={showControls}
    src={src}
    crossOrigin={crossOriginMethod}
    loop={shouldLoop}
    muted={muted}
    preload={preloadMethod}
    autoPlay={autoPlay}
    poster={poster}
    disablePictureInPicture={disablePictureInPicture}
    onLoadedMetadata={onLoadedMetadata}
    onCanPlay={onCanPlay}
    onPlay={onPlay}
    onPlaying={onPlaying}
    onRateChange={onRateChange}
    onSeeked={onSeeked}
    onSeeking={onSeeking}
    onStalled={onStalled}
    onSuspend={onSuspend}
    onWaiting={onWaiting}
    onTimeUpdate={onTimeUpdate}
    onVolumeChange={onVolumeChange}
    onEnded={onEnded}
  >
    {sources.map((source, idx) => (
      <source
        key={idx}
        src={source.src}
        type={source.type}
      />
    ))}
  </video>
)

Video.propTypes = {
  elRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  autoPlay: PropTypes.bool,
  crossOriginMethod: PropTypes.oneOf(['anonymous', 'use-credentials']),
  shouldLoop: PropTypes.bool,
  muted: PropTypes.bool,
  preloadMethod: PropTypes.oneOf(['none', 'metadata', 'auto']),
  showControls: PropTypes.bool,
  src: PropTypes.string,
  sources: PropTypes.array,
  poster: PropTypes.string,
  disablePictureInPicture: PropTypes.bool,
  onCanPlay: PropTypes.func,
  onPlay: PropTypes.func,
  onPlaying: PropTypes.func,
  onEnded: PropTypes.func,
  onRateChange: PropTypes.func,
  onSeeked: PropTypes.func,
  onSeeking: PropTypes.func,
  onStalled: PropTypes.func,
  onSuspend: PropTypes.func,
  onWaiting: PropTypes.func,
  onVolumeChange: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
}

Video.defaultProps = {
  className: '',
  showControls: true,
  autoPlay: false,
  shouldLoop: false,
  muted: false,
  preloadMethod: 'metadata',
  sources: []
}

export default Video
