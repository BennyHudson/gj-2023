import type { PaymentIntent } from '@stripe/stripe-js'
import type { ReactNode } from 'react'

import type { BillingAddressProps } from '@typings/BillingAddress.types'
import type { ShippingAddress } from '@typings/ShippingAddress.types'
import type { Voucher } from '@typings/Voucher.types'

export interface CheckoutProps {
  children: ReactNode
  paymentIntent: PaymentIntent
}

export interface CheckoutState {
  activePanel: number
  message: string
  checkoutForm: {
    billing?: BillingAddressProps
    shipping?: ShippingAddress
    voucher?: Voucher
  }
  isLoading: boolean
  notificationState: 'error' | 'success'
}
