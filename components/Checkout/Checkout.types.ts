import { PaymentIntent } from '@stripe/stripe-js'
import { ReactNode } from 'react'

export interface CheckoutProps {
  children: ReactNode
  paymentIntent: PaymentIntent
}

export interface CheckoutState {
  activePanel: number
  message: string
  checkoutForm: unknown
  isLoading: boolean
  notificationState: 'error' | 'success' 
}
