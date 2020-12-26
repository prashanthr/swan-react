import React, { useEffect } from 'react'
import { Notifications } from '../../src'
import './index.css'

const { NotificationsProvider, NotificationsSystem, themes, effects, statuses } = Notifications.appNotifications
const { useNotifications, setUpNotifications } = effects
const { atalhoTheme } = themes
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
        dismissible: true
        // id: string;
        // title?: string;
        // message?: string;
        // status: Status;
        // position: Position;
        // buttons: NotificationButton[];
        // image?: string;
        // dismissAfter?: number;
        // dismissible?: boolean;
        // onAdd?: (...args: any[]) => void;
        // onDismiss?: (...args: any[]) => void;
        // showDismissButton?: boolean;
        // allowHTML?: boolean;
    },
    // customizeNotification: ((notification: NewNotification) => void) | null;
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

const ComponentWithAppNotifications = () => {
  // 1. Retrieve the action to create/update a notification.
  const { notify } = useNotifications()

  useEffect(() => {
      // 2. Create a notification.
      console.log('Dispatching notifications...')
      notify({
        title: 'Welcome to the documentation',
        status: statuses.info,
        dismissible: true,
        dismissAfter: 2500
      })
      notify({
        id: 'custom-id',
        title: 'Welcome to the demo!',
        message: 'Use the notification creator to discover what you can do with it.',
        status: statuses.loading,
        dismissible: false,
        dismissAfter: 0,
      })
  },[])

  return (
      <div>
        Hello, Notifications!
      </div>
  )
}

export default {
  title: 'Notifications',
  component: AppNotificationExample
}
