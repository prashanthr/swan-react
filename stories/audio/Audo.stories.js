import React from 'react'
import { Audio } from '../../src'

const exampleAudioSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'

export default {
  title: 'Audio',
  component: Audio,
}

export const SimpleAudio = () => {
  return (
    <div>
      <Audio
        src={exampleAudioSrc}
        showControls
      />
    </div>
  )
}
