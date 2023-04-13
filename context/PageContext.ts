import { createContext } from 'react'

import type { BillingAddressProps } from '@typings/BillingAddress.types'
import type { Shipping } from '@typings/Shipping.types'
import type { ShippingAddress } from '@typings/ShippingAddress.types'
import type { Subscription } from '@typings/Subscription.types'

interface Customer {
  id: number
  first_name: string
  last_name: string
  email: string
  billing?: BillingAddressProps
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
  subscriptions: Subscription[]
}

export default createContext<Partial<PageContextProps>>({})
