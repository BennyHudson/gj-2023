import type { BillingAddress } from '@typings/BillingAddress.types'

export interface ShippingFormProps {
  billingAddress: BillingAddress
  setFieldValue: (target: string, value?: string) => void
  errors?: {
    shipping?: {
      address_1?: string
      city?: string
      state?: string
      postcode?: string
      country?: string
    }
  }
}
