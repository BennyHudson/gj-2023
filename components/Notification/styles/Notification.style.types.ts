import { Theme } from '@themes/gjTheme/gjTheme.types'
import { NotificationProps } from '../Notification.types'

export interface StyledNotificationProps {
  theme: Theme
  state: NotificationProps['state']
}
