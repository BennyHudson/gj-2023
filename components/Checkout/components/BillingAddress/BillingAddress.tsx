import { Formik } from 'formik'
import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'

import BillingForm, { billingValidation } from '@components/BillingForm'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { BillingAddressProps as BAProps } from '@typings/BillingAddress.types'

import type { BillingAddressProps } from './BillingAddress.types'
import CheckoutPanel from '../CheckoutPanel'

const BillingAddress: FC<BillingAddressProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
  checkoutForm,
  setCheckoutForm,
}: BillingAddressProps): ReactElement => {
  const { customerId, customer } = useContext(PageContext) as PageContextProps

  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Billing Address'>
      {activePanel === panelIndex && (
        <Formik
          validationSchema={billingValidation}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            billing: {
              first_name: checkoutForm?.billing?.first_name || '',
              last_name: checkoutForm?.billing?.last_name || '',
              address_1: customer?.billing?.address_1 || '',
              address_2: customer?.billing?.address_2 || '',
              city: customer?.billing?.city || '',
              state: customer?.billing?.state || '',
              postcode: customer?.billing?.postcode || '',
              country: customer?.billing?.country || '',
            },
          }}
          onSubmit={async (values: { billing: BAProps }) => {
            const updateUser = await fetch(`/api/user/update/${customer?.id || customerId}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                billing: values.billing,
              }),
            })

            if (updateUser.status === 200) {
              setCheckoutForm(values)
              setActivePanel(activePanel + 1)
            }
          }}
        >
          {(props) => <BillingForm {...props} />}
        </Formik>
      )}
    </CheckoutPanel>
  )
}

export default BillingAddress
