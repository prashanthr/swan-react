import React from 'react'
import { AudioPlayer } from '../../src'
import './index.css'

const exampleAudioSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
const exampleSrc = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'
const albumArtImgSrc = 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
const albumArtSrc = 'https://unsplash.com/photos/RnCPiXixooY'
export default {
  title: 'AudioPlayer',
  component: AudioPlayer,
}

const Sources = () => (
  <div>
    <br />
    <a href={exampleSrc} target='_blank'>Audio Source</a>
    <br />
    <a href={albumArtSrc} target='_blank'>Image Source</a>
  </div>
)

export const SimpleAudioPlayer = () => {
  return (
    <div>
      <br />
      <AudioPlayer
        trackSrc={exampleAudioSrc}
        trackName={'Rex Roar'}
        albumArtSrc={albumArtImgSrc}
        artist={'T Rex'}
        album={'The Roar Collection'}
      />
      <Sources />
    </div>
  )
}


export const CustomAudioPlayer = () => {
  return (
    <div>
      <br />
      <AudioPlayer
        className={'custom-audio-player'}
        trackSrc={exampleAudioSrc}
        trackName={'Rex Roar'}
        albumArtSrc={albumArtImgSrc}
        artist={'T Rex'}
        album={'The Roar Collection'}
      />
      <Sources />
      <h3>Note: A lot more customization is available. Check out the docs/props to see what you can do</h3>
    </div>
  )
}
