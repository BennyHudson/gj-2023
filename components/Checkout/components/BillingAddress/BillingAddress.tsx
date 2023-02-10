import React, { ReactElement, FC, useContext } from 'react'
import { Formik } from 'formik'

import BillingForm from '@components/BillingForm'

import PageContext, { PageContextProps } from '@context/PageContext'

import CheckoutPanel from '../CheckoutPanel'

import { BillingAddressProps } from './BillingAddress.types'

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
      {activePanel === panelIndex && 
        <Formik
          initialValues={{
            billing: {
              ...checkoutForm?.billing,
              address_1: customer?.billing?.address_1,
              address_2: customer?.billing?.address_2,
              city: customer?.billing?.city,
              state: customer?.billing?.state,
              postcode: customer?.billing?.postcode,
              country: customer?.billing?.country,
            }
          }}
          onSubmit={async (values) => {
            const updateUser = await fetch(`/api/user/update/${customer?.id || customerId}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                billing: values.billing,
              })
            })

            if (updateUser.status === 200) {
              setCheckoutForm(values)
              setActivePanel(activePanel + 1)
            }
          }}
        >
          <BillingForm />
        </Formik>
      }
    </CheckoutPanel>
  )
}

export default BillingAddress
