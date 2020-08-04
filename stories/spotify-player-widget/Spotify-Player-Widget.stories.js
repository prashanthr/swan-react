import React from 'react'
import { action } from '@storybook/addon-actions'
import { SpotifyPlayerWidget } from '../../src'

export default {
  title: 'SpotifyPlayerWidget',
  component: SpotifyPlayerWidget,
}

const TRACK_URI = 'https://open.spotify.com/track/70izrPPF9I7fqCOChXsc30?si=R875-aAnR1a0UrV4ScPXTQ'

const ALBUM_URI = 'https://open.spotify.com/album/4RuzGKLG99XctuBMBkFFOC'

export const SpotifyPlayer = () => (
  <SpotifyPlayerWidget
    itemUri={TRACK_URI}
  />
)

export const SpotifyTrackPlayer = () => (
  <SpotifyPlayerWidget
    itemUri={TRACK_URI}
  />
)

export const SpotifyAlumPlayer = () => (
  <SpotifyPlayerWidget
    itemUri={ALBUM_URI}
  />
)

SpotifyPlayer.story = {
  name: 'SpotifyPlayerWidget'
}
