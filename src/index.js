import Audio from './components/audio'
import AudioPlayer from './components/audio-player'
import Button from './components/button'
import Card from './components/card'
import { CopyToClipboard as CopyComponent, effects as CopyEffects } from './components/copy-to-clipboard'
import EditableText from './components/editable-text'
import Emoji from './components/emoji'
import FormControls from './components/form-controls'
import Modal from './components/modal'
import Progress from './components/progress'
import Recaptcha from './components/recaptcha'
import SpotifyPlayerWidget from './components/spotify-player-widget'
import { TimerWithoutEffects, TimerWithEffects, effects as TimerEffects } from './components/timer'

const CopyToClipboard = {
  CopyToClipboard: CopyComponent,
  effects: CopyEffects
}

const Timer = {
  Timer: TimerWithoutEffects,
  TimerWithEffects,
  effects: TimerEffects
}

export {
  Audio,
  AudioPlayer,
  Button,
  Card,
  CopyToClipboard,
  EditableText,
  Emoji,
  FormControls,
  Modal,
  Progress,
  Recaptcha,
  SpotifyPlayerWidget,
  Timer
}
