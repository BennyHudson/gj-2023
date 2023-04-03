export interface OrderSummaryProps {
  panelIndex: number
  activePanel: number
  setActivePanel: (activePanel: number) => void
  setCheckoutForm: (checkoutForm: unknown) => void
}
