import React from 'react'
import PropTypes from 'prop-types'
import { isUriValid, getUri, UNKNOWN_URI } from './utils/uri'
import SizeBreakpoints from './utils/size'

const SpotifyPlayerWidget = ({ itemUri, height, width, compact }) => (
  <iframe
    src={isUriValid(itemUri) ? getUri(itemUri) : UNKNOWN_URI}
    width={compact ? SizeBreakpoints.COMPACT_WIDTH : width}
    height={compact ? SizeBreakpoints.COMPACT_HEIGHT : height}
    frameborder='0'
    allowtransparency='true'
    allow='encrypted-media'
  />
)

SpotifyPlayerWidget.propTypes = {
  itemUri: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  compact: PropTypes.bool
}

SpotifyPlayerWidget.defaultProps = {
  width: SizeBreakpoints.LARGE_WIDTH,
  height: SizeBreakpoints.LARGE_HEIGHT,
  compact: false
}

export default SpotifyPlayerWidget
