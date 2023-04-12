import { createContext } from 'react'

import { BillingAddress } from '@typings/BillingAddress.types'
import { Shipping } from '@typings/Shipping.types'
import { ShippingAddress } from '@typings/ShippingAddress.types'

interface Customer {
  id: number
  first_name: string
  last_name: string
  email: string
  billing?: BillingAddress
  shipping?: ShippingAddress
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
