import React from 'react'
import { action } from '@storybook/addon-actions'
import { SpotifyPlayerWidget } from '../../src'

export default {
  title: 'Spotify Player',
  component: SpotifyPlayerWidget,
}

const TRACK_URI = 'https://open.spotify.com/track/1rgnBhdG2JDFTbYkYRZAku'
const TRACK_ID = 'spotify:track:62aP9fBQKYKxi7PDXwcUAS'
const TRACK_URI_COMPACT = 'https://open.spotify.com/track/0Jlcvv8IykzHaSmj49uNW8'
const ALBUM_URI = 'https://open.spotify.com/album/6yaiubHHJy8N8QcHy3julo'
const ARTIST_URI = 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ'
const INVALID_URI = 'https://google.com'

export const SpotifyTrackPlayer = () => (
  <SpotifyPlayerWidget
    itemUri={TRACK_URI}
  />
)

export const SpotifyTrackPlayerWithIdentifier = () => (
  <SpotifyPlayerWidget
    itemUri={TRACK_ID}
  />
)

export const SpotifyTrackPlayerCompact = () => (
  <SpotifyPlayerWidget
    itemUri={TRACK_URI}
    compact
  />
)

export const SpotifyAlbumPlayer = () => (
  <SpotifyPlayerWidget
    itemUri={ALBUM_URI}
  />
)

export const SpotifyArtistPlayer = () => (
  <SpotifyPlayerWidget
    itemUri={ARTIST_URI}
  />
)


export const SpotifyInvalidPlayer = () => (
  <SpotifyPlayerWidget
    itemUri={INVALID_URI}
  />
)
