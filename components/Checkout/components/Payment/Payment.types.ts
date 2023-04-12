import { PaymentIntent } from '@stripe/stripe-js'

import { CheckoutState } from '../../Checkout.types'

export interface PaymentProps {
  panelIndex: number
  activePanel: number
  setActivePanel: (activePanel: number) => void
  setCheckoutForm: (checkoutForm: CheckoutState['checkoutForm']) => void
  checkoutForm: CheckoutState['checkoutForm']
  paymentIntent: PaymentIntent
  setIsLoading: (isLoading: boolean) => void
}
