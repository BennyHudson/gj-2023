import type { PaymentIntent } from '@stripe/stripe-js'

import type { BillingAddressProps } from '@typings/BillingAddress.types'
import type { ShippingAddress } from '@typings/ShippingAddress.types'
import type { Voucher } from '@typings/Voucher.types'

export interface CheckoutProps {
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
