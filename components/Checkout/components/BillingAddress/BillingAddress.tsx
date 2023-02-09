import React, { ReactElement, FC, useContext } from 'react'
import { Formik, Form } from 'formik'

import TextField from '@components/TextField'
import Select from '@components/Select'
import EditButton from '@components/EditButton'

import { countries } from '../../countries'

import { BillingAddressProps } from './BillingAddress.types'
import CheckoutPanel from '../CheckoutPanel'
import PageContext, { PageContextProps } from '@context/PageContext'

const BillingAddress: FC<BillingAddressProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
  checkoutForm,
  setCheckoutForm,
}: BillingAddressProps): ReactElement => {
  const { customerId } = useContext(PageContext) as PageContextProps

  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Billing Address'>
      {activePanel === panelIndex && 
        <Formik
          initialValues={{
            billing: {
              ...checkoutForm.billing,
              address_1: '',
              address_2: '',
              city: '',
              state: '',
              postcode: '',
              country: '',
            }
          }}
          onSubmit={async (values) => {
            const updateUser = await fetch(`/api/user/update/${customerId}`, {
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
          <Form>
            <TextField isRequired label='Address Line 1' id='billing.address_1' target='billing.address_1' />
            <TextField label='Address Line 2' id='billing.address_2' target='billing.address_2' />
            <TextField isRequired label='Town' id='billing.city' target='billing.city' />
            <TextField label='County' id='billing.state' target='billing.state' />
            <TextField isRequired label='Postcode' id='billing.postcode' target='billing.postcode' />
            <Select label='Country' choices={countries} isRequired id='billing.country' target='billing.country' />
            <EditButton text='Continue' type='submit' />
          </Form>
        </Formik>
      }
    </CheckoutPanel>
  )
}

export default BillingAddress
