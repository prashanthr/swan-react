import React, { useEffect } from 'react'
import { Notifications } from '../../src'

const { NotificationsProvider, NotificationsSystem, themes, effects } = Notifications
const { useNotifications, setUpNotifications } = effects
const { atalhoTheme } = themes
export const ARootComponent = () => {
  return (
      <NotificationsProvider>
          <ATopLevelComponent>
            <AComponent />
          </ATopLevelComponent>
      </NotificationsProvider>
  )
}
const ATopLevelComponent = ({ children }) => {
  // 1. Retrieve the notifications to display, and the function used to dismiss a notification.
  const { notifications, dismissNotification } = useNotifications()
  setUpNotifications({
    defaultProps: {
        position: 'top-right',
        dismissible: true
    },
    generateId: () => new Date().getTime().toString()
  })

  console.log('notifications to disp', notifications)
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

const AComponent = () => {
  // 1. Retrieve the action to create/update a notification.
  const { notify } = useNotifications()

  useEffect(() => {
      // 2. Create a notification.
      console.log('dispatching a notification')
      notify('Uploading your file...', 'loading', {
        dismissible: true,
      })
      notify('Welcome to the documentation', 'info', { dismissible: true })
      notify({
        id: 'custom-id',
        title: 'Welcome to the demo!',
        message: 'Use the notification creator to discover what you can do with it.',
        status: 'loading',
        dismissible: false,
        dismissAfter: 0,
      })
  },[])

  return (
      <div>
        Hi
      </div>
  )
}

export default {
  title: 'Notifications',
  component: ARootComponent
}
