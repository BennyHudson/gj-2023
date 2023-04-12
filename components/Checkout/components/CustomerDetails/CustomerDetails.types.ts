import { CheckoutState } from '../../Checkout.types'

export interface CustomerDetailsProps {
  panelIndex: number
  activePanel: number
  setActivePanel: (activePanel: number) => void
  setCheckoutForm: (checkoutForm: CheckoutState['checkoutForm']) => void
}

export interface CustomerDetailsState {
  validationMessage?: string
}