import { Formik } from 'formik'
import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import type { CheckoutState } from '@components/Checkout/Checkout.types'
import ShippingForm, { shippingValidation } from '@components/ShippingForm'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { ShippingAddressProps } from './ShippingAddress.types'
import CheckoutPanel from '../CheckoutPanel'

const ShippingAddress: FC<ShippingAddressProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
  checkoutForm,
  setCheckoutForm,
}: ShippingAddressProps): ReactElement => {
  const { customer, customerId, cart, setShippingRate, getCustomerData } = useContext(PageContext) as PageContextProps

  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Shipping Address'>
      {activePanel === panelIndex && (
        <Formik
          validationSchema={shippingValidation}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            shipping: {
              first_name: checkoutForm.billing?.first_name,
              last_name: checkoutForm.billing?.last_name,
              address_1: customer?.shipping?.address_1 || '',
              address_2: customer?.shipping?.address_2 || '',
              city: customer?.shipping?.city || '',
              state: customer?.shipping?.state || '',
              postcode: customer?.shipping?.postcode || '',
              country: customer?.shipping?.country || '',
            },
          }}
          onSubmit={async (values: CheckoutState['checkoutForm']) => {
            const updateUser = await fetch(`/api/user/update/${customer?.id || customerId}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                shipping: values.shipping,
              }),
            })

            if (updateUser.status === 200) {
              const shippingCalculator = await fetch('/api/shipping/calculator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  shippingAddress: values.shipping,
                  cart,
                }),
              })

              const shippingRate = await shippingCalculator.json()
              setShippingRate(shippingRate)
              setCheckoutForm({ ...checkoutForm, shipping: { ...values.shipping } })
              getCustomerData(customer.id)
              setActivePanel(activePanel + 1)
            }
          }}
        >
          {(props) => <ShippingForm {...props} billingAddress={checkoutForm.billing} />}
        </Formik>
      )}
    </CheckoutPanel>
  )
}

export default ShippingAddress
