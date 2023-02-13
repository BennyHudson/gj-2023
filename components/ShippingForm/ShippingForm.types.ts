export interface ShippingFormProps {
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
