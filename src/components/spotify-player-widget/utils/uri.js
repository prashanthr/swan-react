// https://developer.spotify.com/documentation/widgets/
// https://developer.spotify.com/documentation/widgets/generate/play-button/

const BASE_URI = 'https://open.spotify.com/'
const BASE_IDENTIFIER = 'spotify:'
const BASE_EMBED_URI = 'https://open.spotify.com/embed'
export const UNKNOWN_URI = `${BASE_EMBED_URI}/unknown`

export const isUriValid = (itemUri) => {
  return itemUri && (
    itemUri.startsWith(BASE_URI)
    || itemUri.startsWith(BASE_IDENTIFIER)
  )
}

const getUriWithoutQueryString = (uri) => {
  const queryStringLoc = uri.indexOf('?')
  return queryStringLoc > -1
      ? uri.substring(0, queryStringLoc)
      : uri
}

export const getUri = (itemUri) => {
  let itemType = ''
  let id = ''
  if (itemUri.startsWith(BASE_URI)) {
    // Full url - https://open.spotify.com/album/4RuzGKLG99XctuBMBkFFOC
    const resolvedUri = getUriWithoutQueryString(itemUri)
    const uriSuffix = resolvedUri.replace(BASE_URI, '')
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
  return `${BASE_EMBED_URI}/${itemType}/${id}`
}
