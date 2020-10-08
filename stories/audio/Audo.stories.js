import React from 'react'
import { Audio } from '../../src'

const exampleAudioSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
const exampleSrc = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'
export default {
  title: 'Audio',
  component: Audio,
}

export const SimpleAudio = () => {
  return (
    <div>
      <br />
      <Audio
        src={exampleAudioSrc}
        showControls
      />
      <br />
      <a href={exampleSrc} target='_blank'>Source</a>
    </div>
  )
}
