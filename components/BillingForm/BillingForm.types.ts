export interface BillingFormProps {
  errors?: {
    billing?: {
      address_1?: string
      city?: string
      state?: string
      postcode?: string
      country?: string
    }
  }
}
