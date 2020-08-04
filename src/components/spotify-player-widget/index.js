import React from 'react'
import PropTypes from 'prop-types'

const BASE_URI = 'https://open.spotify.com/'
const BASE_IDENTIFIER = 'spotify:'

const isUriValid = (itemUri) => {
  return itemUri && (
    itemUri.startsWith(BASE_URI)
    || itemUri.startsWith(BASE_IDENTIFIER)
  )
}
// https://developer.spotify.com/documentation/widgets/generate/play-button/
const getUri = (itemUri) => {
  let itemType = ''
  let id = ''
  if (itemUri.startsWith(BASE_URI)) {
    // Full url - https://open.spotify.com/album/4RuzGKLG99XctuBMBkFFOC
    const uriSuffix = itemUri.replace(BASE_URI, '')
    itemType = uriSuffix.substring(0, uriSuffix.indexOf('/'))
    id = uriSuffix.substring(
      uriSuffix.lastIndexOf('/') + 1,
      uriSuffix.length
    )
  } else {
    // spotify:album:1DFixLWuPkv3KT3TnV35m3
    const parts = itemUri.split(':')
    if (parts.length >= 2) {
      itemType = parts[1]
      id = parts[2]
    }
  }
  return `https://open.spotify.com/embed/${itemType}/${id}`
}

const SpotifyPlayerWidget = ({ itemUri, height, width }) => (
  isUriValid(itemUri) ? (
    <iframe
      src={getUri(itemUri)}
      width={width}
      height={height}
      frameborder='0'
      allowtransparency='true'
      allow='encrypted-media' />
  )
  : (
    <div>
      Invalid Spotify Item URI
    </div>
  )
)

SpotifyPlayerWidget.propTypes = {
  itemUri: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

SpotifyPlayerWidget.defaultProps = {
  width: 380,
  height: 380
}

export default SpotifyPlayerWidget
