import React from 'react'
import { AudioPlayer } from '../../src'

const exampleAudioSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
const exampleSrc = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'

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
        albumArtSrc={''}
        artist={'T Rex'}
        album={'The Roar Collection'}
      />
      <br />
      <a href={exampleSrc} target='_blank'>Source</a>
    </div>
  )
}
