import React from 'react'
import { Video } from '../../src'

const exampleSrc = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video'
const exampleSourcesBasePath = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos'

export default {
  title: 'Video',
  component: Video,
}

export const SimpleVideo = () => {
  return (
    <div>
      <br />
      <Video
        src={`${exampleSourcesBasePath}/flower.mp4`}
        width={'50%'}
      />
      <br />
      <a href={exampleSrc} target='_blank'>Source</a>
    </div>
  )
}

export const SimpleVideoWithSources = () => {
  const sources = [{
    src: `${exampleSourcesBasePath}/flower.webm`,
    type: 'video/webm'
  }, {
    src: `${exampleSourcesBasePath}/flower.mp4`,
    type: 'video/mp4'
  }]
  return (
    <div>
      <br />
      <Video
        sources={sources}
        width={'50%'}
      />
      <br />
      <a href={exampleSrc} target='_blank'>Source</a>
    </div>
  )
}
