import React from 'react'
import { Audio } from '../../src'

const exampleAudoSrceBasePath = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio'
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
        src={`${exampleAudoSrceBasePath}/t-rex-roar.mp3`}
      />
      <br />
      <a href={exampleSrc} target='_blank'>Source</a>
    </div>
  )
}

export const SimpleAudioWithSources = () => {
  const sources = [{
    src: `${exampleAudoSrceBasePath}/t-rex-roar.mp3`,
    type: 'audio/mp3'
  }]
  return (
    <div>
      <br />
      <Audio
        sources={sources}
      />
      <br />
      <a href={exampleSrc} target='_blank'>Source</a>
    </div>
  )
}
