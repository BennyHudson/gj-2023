import { ReactNode } from 'react'

export interface FieldWrapperProps {
  children: ReactNode
  target: string
  label: string
  required: boolean
  hideLabels?: boolean
}
