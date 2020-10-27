import React from 'react'
import PropTypes from 'prop-types'

const Album = ({ albumArt, className, imgClassName }) => (
  <div className={`swan-audio-player-album-grid ${className}`}>
    <div
      className={`swan-audio-player-album ${imgClassName}`}
      style={albumArt ? { backgroundImage: `url(${albumArt})` } : {}}
    />
  </div>
)

Album.propTypes = {
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  albumArt: PropTypes.string
}

Album.defaultProps = {
  className: '',
  imgClassName: ''
}

export default Album
