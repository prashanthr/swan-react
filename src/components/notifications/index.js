// https://github.com/LouisBarranqueiro/reapop#with-react-alone-react--1680

import NotificationsSystem, {
  atalhoTheme,
  baseTheme,
  bootstrapTheme,
  wyboTheme,
  NotificationsProvider,
  useNotifications,
  setUpNotifications
} from 'reapop'

const effects = { useNotifications, setUpNotifications }
const themes = { atalhoTheme, baseTheme, bootstrapTheme, wyboTheme }

export {
  NotificationsProvider,
  NotificationsSystem,
  effects,
  themes
}
