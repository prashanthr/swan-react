// https://github.com/LouisBarranqueiro/reapop#with-react-alone-react--1680

import NotificationsSystem, {
  atalhoTheme,
  baseTheme,
  bootstrapTheme,
  wyboTheme,
  NotificationsProvider,
  useNotifications,
  setUpNotifications,
  STATUSES,
  POSITIONS,
  FadeTransition,
  SlideTransition,
  GrowTransition
} from 'reapop'

const effects = { useNotifications, setUpNotifications }
const themes = { atalhoTheme, baseTheme, bootstrapTheme, wyboTheme }
const transitions = { FadeTransition, SlideTransition, GrowTransition }
const statuses = STATUSES
const positions = POSITIONS

export {
  NotificationsProvider,
  NotificationsSystem,
  effects,
  themes,
  statuses,
  positions,
  transitions
}
