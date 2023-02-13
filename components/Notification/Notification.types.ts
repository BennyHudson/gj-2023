import { ReactNode } from 'react'

export interface NotificationProps {
  text: string
  state: 'success' | 'error'
}
