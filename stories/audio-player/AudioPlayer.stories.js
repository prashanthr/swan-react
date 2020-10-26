import React from 'react'
import { AudioPlayer } from '../../src'

const exampleAudioSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
const exampleSrc = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'
const albumArtSrc = 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
export default {
  title: 'AudioPlayer',
  component: AudioPlayer,
}

export const SimpleAudioPlayer = () => {
  return (
    <div>
      <br />
      <AudioPlayer
        trackSrc={exampleAudioSrc}
        trackName={'Rex Roar'}
        albumArtSrc={albumArtSrc}
        artist={'T Rex'}
        album={'The Roar Collection'}
      />
      <br />
      <a href={exampleSrc} target='_blank'>Source</a>
    </div>
  )
}
