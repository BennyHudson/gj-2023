import type { CheckoutState } from '../../Checkout.types'

export interface VoucherCodeProps {
  panelIndex: number
  activePanel: number
  setActivePanel: (activePanel: number) => void
  setCheckoutForm: (checkoutForm: CheckoutState['checkoutForm']) => void
  checkoutForm: CheckoutState['checkoutForm']
}

export interface VoucherCodeState {
  errorMessage?: string
}
