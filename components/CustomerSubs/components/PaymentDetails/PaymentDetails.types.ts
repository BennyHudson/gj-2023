import type { Card } from '@stripe/stripe-js'

export interface PaymentDetailsProps {
  cardDetails: Card
  editMode?: boolean
  setEditMode: (editMode: boolean) => void
  customerId: number
  subscriptionId: number
}
