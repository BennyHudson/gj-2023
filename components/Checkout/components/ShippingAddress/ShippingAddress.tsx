import React, { ReactElement, FC, useContext } from 'react'
import { Formik, Form } from 'formik'

import TextField from '@components/TextField'
import Select from '@components/Select'
import EditButton from '@components/EditButton'

import { countries } from '../../countries'

import { ShippingAddressProps } from './ShippingAddress.types'
import CheckoutPanel from '../CheckoutPanel'
import PageContext, { PageContextProps } from '@context/PageContext'

const ShippingAddress: FC<ShippingAddressProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
  checkoutForm,
  setCheckoutForm,
}: ShippingAddressProps): ReactElement => {
  const { customerId, cart, setShippingRate, customer } = useContext(PageContext) as PageContextProps
  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Shipping Address'> 
      {activePanel === panelIndex && 
        <Formik
          initialValues={{
            shipping: {
              first_name: checkoutForm.billing?.first_name,
              last_name: checkoutForm.billing?.last_name,
              address_1: customer?.shipping?.address_1,
              address_2: customer?.shipping?.address_2,
              city: customer?.shipping?.city,
              state: customer?.shipping?.state,
              postcode: customer?.shipping?.postcode,
              country: customer?.shipping?.country,
            },
          }}
          onSubmit={async (values) => {
            const updateUser = await fetch(`/api/user/update/${customer?.id || customerId}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                shipping: values.shipping,
              })
            })

            if (updateUser.status === 200) {
              const shippingCalculator = await fetch('/api/shipping/calculator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  shippingAddress: values.shipping,
                  cart,
                })
              })
      
              const shippingRate = await shippingCalculator.json()
              setShippingRate(shippingRate)
              setCheckoutForm({...checkoutForm, shipping: { ...values.shipping }})
              setActivePanel(activePanel + 1)
            }
          }}
        >
          {props => (
            <Form>
              <EditButton
                type='button'
                onClick={() => {
                  props.setFieldValue('shipping.address_1', checkoutForm.billing.address_1)
                  props.setFieldValue('shipping.address_2', checkoutForm.billing.address_2)
                  props.setFieldValue('shipping.city', checkoutForm.billing.city)
                  props.setFieldValue('shipping.state', checkoutForm.billing.state)
                  props.setFieldValue('shipping.postcode', checkoutForm.billing.postcode)
                  props.setFieldValue('shipping.country', checkoutForm.billing.country)
                }}
                text='Copy from billing address'
              />
              <TextField isRequired label='Address Line 1' id='shipping.address_1' target='shipping.address_1' />
              <TextField label='Address Line 2' id='shipping.address_2' target='shipping.address_2' />
              <TextField isRequired label='Town' id='shipping.city' target='shipping.city' />
              <TextField label='County' id='shipping.state' target='shipping.state' />
              <TextField isRequired label='Postcode' id='shipping.postcode' target='shipping.postcode' />
              <Select label='Country' choices={countries} isRequired id='shipping.country' target='shipping.country' />
              <EditButton text='Continue' type='submit' />
            </Form>
          )}
        </Formik>
      }
    </CheckoutPanel>
  )
}

export default ShippingAddress
