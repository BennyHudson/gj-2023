export interface BillingAddressProps {
  panelIndex: number
  activePanel: number
  setActivePanel: (activePanel: number) => void
  setCheckoutForm: (checkoutForm: unknown) => void
  checkoutForm: unknown
}
