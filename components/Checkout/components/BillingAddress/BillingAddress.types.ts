import type { CheckoutState } from '../../Checkout.types'

export interface BillingAddressProps {
  panelIndex: number
  activePanel: number
  setActivePanel: (activePanel: number) => void
  setCheckoutForm: (checkoutForm: CheckoutState['checkoutForm']) => void
  checkoutForm: CheckoutState['checkoutForm']
}
