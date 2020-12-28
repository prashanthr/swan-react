import React, { useEffect } from 'react'
import { Notifications } from '../../src'
import './index.css'

const { NotificationsProvider, NotificationsSystem, themes, effects, statuses } = Notifications.appNotifications
const { useNotifications, setUpNotifications } = effects
const { atalhoTheme } = themes

const LIBRARY_SOURCE = 'https://github.com/LouisBarranqueiro/reapop'

export const AppNotificationExample = () => {
  return (
      <NotificationsProvider>
          <AppNotificationsWrapper>
            <ComponentWithAppNotifications />
          </AppNotificationsWrapper>
      </NotificationsProvider>
  )
}
const AppNotificationsWrapper = ({ children }) => {
  // 1. Retrieve the notifications to display, and the function used to dismiss a notification.
  const { notifications, dismissNotification } = useNotifications()
  setUpNotifications({
    defaultProps: {
        position: 'top-right',
        dismissible: true,
        showDismissButton: true,
        onAdd: () => console.log('Notification added'),
        onDismiss: () => console.log('Notification dismissed')
    },
    // customizeNotification: ((notification: NewNotification) => void) | null;
    generateId: () => new Date().getTime().toString()
  })

  return (
      <div>
          <NotificationsSystem
              // 2. Pass the notifications you want Reapop to display.
              notifications={notifications}
              // 3. Pass the function used to dismiss a notification.
              dismissNotification={(id) => dismissNotification(id)}
              // 4. Pass a builtIn theme or a custom theme.
              theme={atalhoTheme}
          />
          {children}
      </div>
  )
}

const ComponentWithAppNotifications = () => {
  // 1. Retrieve the action to create/update a notification.
  const { notify, notifications } = useNotifications()
  useEffect(() => {
      // 2. Create a notification.
      console.log('Dispatching notifications...')
      let updateableNotification = {
        id: 'custom-id',
        title: 'Welcome to the demo!',
        message: 'This notification is currently not dismissable to denote pending state',
        status: statuses.loading,
        dismissible: false,
        dismissAfter: 0,
      }
      notify({
        title: 'Welcome to the documentation',
        status: statuses.info,
        dismissible: true,
        dismissAfter: 2500
      })
      notify(updateableNotification)
      setTimeout(() => {
        notify({
          ...updateableNotification,
          status: statuses.success,
          buttons: [{
            name: 'Got it',
            primary: true
          }],
          allowHTML: true,
          message: '<span>It has been updated.<br /><br />You can now dismiss it or it will auto dismiss in some time',
          dismissAfter: 5000,
          dismissible: true
        })
      }, 5000)
    }, [])

  return (
      <div>
        Hello, Notifications!
        <br />
        This was made possible by this&nbsp;
        <a href={LIBRARY_SOURCE} target='_blank' rel='noreferrer noopener'>
          amazing library
        </a>
      </div>
  )
}

export default {
  title: 'Notifications',
  component: AppNotificationExample
}
