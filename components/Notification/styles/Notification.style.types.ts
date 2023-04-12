import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { NotificationProps } from '../Notification.types'

export interface StyledNotificationProps {
  theme: Theme
  state: NotificationProps['state']
}
