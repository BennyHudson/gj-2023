import React, { createContext } from 'react'

export interface PageContextProps {
  cmsUrl: string
  apiUrl: string
  activeNavElement: number
  setActiveNavElement: (navElement: number) => void
  headerHeight: number
  setHeaderHeight: (headerHeight: number) => void
  token: string
  setToken: (token?: string) => void
  customerId: number
  setCustomerId: (customerId?: number) => void
}

export default createContext<Partial<PageContextProps>>({})
