import React from 'react'
import { AudioPlayer } from '../../src'

const exampleAudioSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
const exampleSrc = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'
const albumArtSrc = 'https://i.scdn.co/image/ab67616d0000b27338802659d156935ada63c9e3'
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
