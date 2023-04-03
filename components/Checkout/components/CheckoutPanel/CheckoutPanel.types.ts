import { ReactNode } from 'react'

export interface CheckoutPanelProps {
  children: ReactNode
  panelIndex: number
  activePanel: number
  title: string
  setActivePanel: (panelIndex: number) => void
}
