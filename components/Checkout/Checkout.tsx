import React, { ReactElement, FC, useState, useContext, useEffect } from 'react'
import { Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPenNib } from '@fortawesome/pro-thin-svg-icons'
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'

import Heading from '@components/Heading'
import EditButton from '@components/EditButton'
import Button from '@components/Button'
import TextField from '@components/TextField'
import Select from '@components/Select'
import NameField from '@components/NameField'
import Cart from '@components/Cart'

import * as Styled from './styles/Checkout.style'

import { countries } from './countries'
import PageContext, { PageContextProps } from '@context/PageContext'
import { useRouter } from 'next/router'

const Checkout: FC = (): ReactElement => {
  const { setCustomerId, customerId, cart } = useContext(PageContext) as PageContextProps

  const [activePanel, setActivePanel] = useState(1)
  const [billingAddress, setBillingAddress] = useState({})
  const [shippingAddress, setShippingAddress] = useState({})
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const router = useRouter()

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(async ({ paymentIntent }) => {
      const { payment_method, status } = paymentIntent
      
      const paymentMethod = await fetch('/api/checkout/save-payment-method', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payment_method),
      })

      const stripeCustomerId = await paymentMethod.json()
      
      if (status === 'succeeded') {
        setMessage('Payment succeeded!')

        // if (subscription) {
        //   // AUTO LOGIN HERE
        //   // router.push('/clubhouse')
        // }
      }

      // switch (status) {
      // case 'succeeded':
        

      //   break
      // case 'processing':
      //   setMessage('Your payment is processing.')
      //   break
      // case 'requires_payment_method':
      //   setMessage('Your payment was not successful, please try again.')
      //   break
      // default:
      //   setMessage('Something went wrong.')
      //   break
      // }
    })
  }, [stripe])

  const paymentElementOptions = {
    layout: 'tabs',
  }

  if (message) {
    return (
      <>{message}</>
    )
  }

  return (
    <Formik
      initialValues={{
        billing: {
          first_name: 'Ben',
          last_name: 'Hudson',
          address_1: '3 Brookly Gardens',
          address_2: '',
          city: 'Fleet',
          state: 'Hants',
          postcode: 'Gu51 3LL',
          country: 'United Kingdom',
          email: 'ben.hudson20687@gmail.com',
          phone: '0757342833',
        },
        shipping: {
          first_name: 'Ben',
          last_name: 'Hudson',
          address_1: '3 Brookly Gardens',
          address_2: '',
          city: 'Fleet',
          state: 'Hants',
          postcode: 'Gu51 3LL',
          country: 'United Kingdom',
        },
      }}
      onSubmit={async (values) => {
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return
        }

        // Create Customer
        const createCustomer = await fetch('/api/user/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })

        const customer = await createCustomer.json()
        if (createCustomer.status !== 200) return
        
        // Create Subscription
        const subscription = await fetch('/api/subscription/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customerId: customer.id,
            billingAddress: values.billing, 
            shippingAddress: values.shipping,
            cart,
          })
        })

        // Create Order
        const order = await fetch('/api/order/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            billingAddress: values.billing, 
            shippingAddress: values.shipping,
            cart,
          })
        })

        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: 'http://localhost:8080/checkout',
          },
        })
      }}
    >
      {(props) => (
        <Styled.Checkout>
          <Styled.CheckoutPanels>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='1. Your Details' noMargin />
                {activePanel > 1 && (
                  <Styled.IconButton onClick={() => setActivePanel(1)}>
                    <FontAwesomeIcon icon={faPenNib as IconProp} /> Edit
                  </Styled.IconButton>
                )}
              </Styled.CheckoutHeader>
              {activePanel === 1 && (
                <>
                  <NameField
                    isRequired
                    inputs={[
                      {
                        label: 'First Name',
                        id: 'billing.first_name',
                        name: 'billing.first_name',
                      },
                      {
                        label: 'Last Name',
                        id: 'billing.last_name',
                        name: 'billing.last_name',
                      },
                    ]}
                  />
                  <TextField isRequired label='Email Address' id='billing.email' target='billing.email' type='email' />
                  <TextField label='Telephone Number' id='billing.phone' target='billing.phone' type='telephone' />
                  <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
                </>
              )}
            </Styled.CheckoutPanel>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='2. Billing Address' noMargin />
                {activePanel > 2 && (
                  <Styled.IconButton onClick={() => setActivePanel(2)}>
                    <FontAwesomeIcon icon={faPenNib as IconProp} /> Edit
                  </Styled.IconButton>
                )}
              </Styled.CheckoutHeader>
              {activePanel === 2 && (
                <>
                  <TextField isRequired label='Address Line 1' id='billing.address_1' target='billing.address_1' />
                  <TextField label='Address Line 2' id='billing.address_2' target='billing.address_2' />
                  <TextField isRequired label='Town' id='billing.city' target='billing.city' />
                  <TextField label='County' id='billing.state' target='billing.state' />
                  <TextField isRequired label='Postcode' id='billing.postcode' target='billing.postcode' />
                  <Select label='Country' choices={countries} isRequired id='billing.country' target='billing.country' />
                  <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
                </>
              )}
            </Styled.CheckoutPanel>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='3. Shipping Address' noMargin />
                {activePanel > 3 && (
                  <Styled.IconButton onClick={() => setActivePanel(3)}>
                    <FontAwesomeIcon icon={faPenNib as IconProp} /> Edit
                  </Styled.IconButton>
                )}
              </Styled.CheckoutHeader>
              {activePanel === 3 && (
                <>
                  <EditButton
                    onClick={() => {
                      props.setFieldValue('shipping.address_1', props.values.billing.address_1)
                      props.setFieldValue('shipping.address_2', props.values.billing.address_2)
                      props.setFieldValue('shipping.city', props.values.billing.city)
                      props.setFieldValue('shipping.state', props.values.billing.state)
                      props.setFieldValue('shipping.postcode', props.values.billing.postcode)
                      props.setFieldValue('shipping.country', props.values.billing.country)
                    }}
                    text='Copy from Billing Address'
                  />
                  <TextField isRequired label='Address Line 1' id='shipping.address_1' target='shipping.address_1' />
                  <TextField label='Address Line 2' id='shipping.address_2' target='shipping.address_2' />
                  <TextField isRequired label='Town' id='shipping.city' target='shipping.city' />
                  <TextField label='County' id='shipping.state' target='shipping.state' />
                  <TextField isRequired label='Postcode' id='shipping.postcode' target='shipping.postcode' />
                  <Select label='Country' choices={countries} isRequired id='shipping.country' target='shipping.country' />
                  <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
                </>
              )}
            </Styled.CheckoutPanel>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='4. Order Summary' noMargin />
                {activePanel > 4 && (
                  <Styled.IconButton onClick={() => setActivePanel(4)}>
                    <FontAwesomeIcon icon={faPenNib as IconProp} /> Edit
                  </Styled.IconButton>
                )}
              </Styled.CheckoutHeader>
              {activePanel === 4 && (
                <>
                  <Cart viewOnly />
                  <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
                </>
              )}
            </Styled.CheckoutPanel>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='5. Payment' noMargin />
              </Styled.CheckoutHeader>
              {activePanel === 5 && <PaymentElement id='payment-element' options={paymentElementOptions} />}
            </Styled.CheckoutPanel>
          </Styled.CheckoutPanels>
          <Button type='submit' text='Checkout Now' size={1} />
        </Styled.Checkout>
      )}
    </Formik>
  )
}

export default Checkout
