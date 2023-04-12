import { PaymentIntent } from '@stripe/stripe-js'
import { ReactNode } from 'react'

import { BillingAddress } from '@typings/BillingAddress.types'
import { ShippingAddress } from '@typings/ShippingAddress.types'
import { Voucher } from '@typings/Voucher.types'

export interface CheckoutProps {
  children: ReactNode
  paymentIntent: PaymentIntent
}

export interface CheckoutState {
  activePanel: number
  message: string
  checkoutForm: {
    billing?: BillingAddress
    shipping?: ShippingAddress
    voucher?: Voucher
  }
  isLoading: boolean
  notificationState: 'error' | 'success' 
}
