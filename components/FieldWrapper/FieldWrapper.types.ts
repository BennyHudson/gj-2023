import { ReactNode } from 'react'

export interface FieldWrapperProps {
  children: ReactNode
  target: number
  label: string
  required: boolean
  hideLabels?: boolean
}
