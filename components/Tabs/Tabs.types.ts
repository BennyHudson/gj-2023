import { ReactNode } from 'react'

export interface TabsProps {
  tabs: {
    title: string
    content: ReactNode
  }[]
}

export interface TabsState {
  activeTab: number
}
