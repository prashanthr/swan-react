import Audio from './components/audio'
import AudioPlayer from './components/audio-player'
import Button from './components/button'
import Card from './components/card'
import EditableText from './components/editable-text'
import Emoji from './components/emoji'
import FormControls from './components/form-controls'
import Modal from './components/modal'
import { NotificationsProvider, NotificationsSystem, themes, effects as NotificationEffects } from './components/notifications'
import Recaptcha from './components/recaptcha'
import SpotifyPlayerWidget from './components/spotify-player-widget'
import { TimerWithoutEffects, TimerWithEffects, effects as TimerEffects } from './components/timer'

const Timer = {
  Timer: TimerWithoutEffects,
  TimerWithEffects,
  effects: TimerEffects
}

const Notifications = {
  NotificationsProvider,
  NotificationsSystem,
  themes,
  effects: NotificationEffects
}

export {
  Audio,
  AudioPlayer,
  Button,
  Card,
  EditableText,
  Emoji,
  FormControls,
  Modal,
  Recaptcha,
  SpotifyPlayerWidget,
  Timer,
  Notifications
}
