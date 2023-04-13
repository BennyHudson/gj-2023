import type { FormikErrors } from 'formik'

import type { BillingAddressProps } from '@typings/BillingAddress.types'
import type { ShippingAddress } from '@typings/ShippingAddress.types'
import type { Voucher } from '@typings/Voucher.types'

export interface ShippingFormProps {
  billingAddress: BillingAddressProps
  setFieldValue: (target: string, value?: string) => void
  errors?: FormikErrors<{
    billing?: BillingAddressProps | undefined
    shipping?: ShippingAddress | undefined
    voucher?: Voucher | undefined
  }>
}
