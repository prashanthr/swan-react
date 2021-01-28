import React from 'react'
import { Button, AudioPlayer } from '../../src'
import customPlaySvg from './play-white.svg'
import customPauseSvg from './pause-white.svg'
import customVolumeFullSvg from './volume-full-white.svg'
import customVolumeOffSvg from './volume-off-white.svg'
import './index.css'

const exampleAudioSrc = 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3'
const exampleSrc = 'https://file-examples.com/index.php/sample-audio-files/sample-mp3-download/'
const albumArtImgSrc = 'https://images.unsplash.com/photo-1533523705247-88786d3e9242?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80'
const albumArtSrc = 'https://unsplash.com/photos/qwlkNzlDf5I'

const trackName = 'Lost in Tokyo'
const artist = 'The Racoons'
const albumName = 'Wanderer'

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

export const CustomAudioPlayer = () => {
  const CustomPlayPause = ({ onPlayPause, isPlaying }) => (
    <Button
      className='swan-audio-player-button'
      value={<img src={isPlaying ? customPauseSvg : customPlaySvg} />}
      onClick={onPlayPause}
    />
  )
  const CustomVolume = ({
    onToggleMute,
    onVolumeChange,
    isMuted,
    level,
    volumeProgressRef,
    className,
    progressClassName
  }) => (
    <div className={className}>
        <Button
          className='swan-audio-player-button'
          value={<img src={isMuted ? customVolumeOffSvg : customVolumeFullSvg} />}
          onClick={onToggleMute}
        />
        <progress
          className={`swan-audio-player-player-controls-volume-progress ${progressClassName}`}
          role={'none'}
          onKeyPress={() => {}}
          ref={el => { volumeProgressRef = el }}
          onClick={e => onVolumeChange(e, volumeProgressRef)}
          value={isMuted ? 0 : level}
          max={1}
        />
      </div>
  )
  return (
    <div>
      <br />
      <AudioPlayer
        className={'custom-audio-player'}
        trackInfoClassName={'custom-audio-player-common'}
        durationClassName={'custom-audio-player-common'}
        trackSrc={exampleAudioSrc}
        trackName={trackName}
        albumArtSrc={albumArtImgSrc}
        artist={artist}
        album={albumName}
        playPauseCustomComponent={CustomPlayPause}
        volumeCustomComponent={CustomVolume}
      />
      <Sources />
      <h3>Note: A lot more customization is available. Check out the docs/props to see what you can do</h3>
    </div>
  )
}

export const SimpleAudioPlayer = () => {
  return (
    <div>
      <br />
      <AudioPlayer
        trackSrc={exampleAudioSrc}
        trackName={trackName}
        albumArtSrc={albumArtImgSrc}
        artist={artist}
        album={albumName}
      />
      <Sources />
    </div>
  )
}
