import { createContext } from 'react'

import { Shipping } from '@typings/Shipping.types'

interface Customer {
  id: number
  first_name: string
  last_name: string
  email: string
  billing?: {
    address_1?: string
    address_2?: string
    city?: string
    company?: string
    country?: string
    email?: string
    first_name?: string
    last_name?: string
    phone?: string
    postcode?: string
    state?: string
  }
  shipping?: {
    address_1?: string
    address_2?: string
    city?: string
    company?: string
    country?: string
    email?: string
    first_name?: string
    last_name?: string
    phone?: string
    postcode?: string
    state?: string
  }
}

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
  cart: number[]
  setCart: (cart: number[]) => void
  customer: Customer | null
  setCustomer: (customer?: Customer) => void
  shippingRate: Shipping
  setShippingRate: (shippingRate: number) => void
  showToolbar: boolean
  getCustomerData: (id: number) => void
}

export default createContext<Partial<PageContextProps>>({})
