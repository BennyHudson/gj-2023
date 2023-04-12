import { CheckoutState } from '../../Checkout.types'

export interface ShippingAddressProps {
  panelIndex: number
  activePanel: number
  setActivePanel: (activePanel: number) => void
  setCheckoutForm: (checkoutForm: CheckoutState['checkoutForm']) => void
  checkoutForm: CheckoutState['checkoutForm']
}
