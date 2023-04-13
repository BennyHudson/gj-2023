import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import type { StripePaymentElementOptions } from '@stripe/stripe-js'
import { Form, Formik } from 'formik'
import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import Button from '@components/Button'
import Link from '@components/Link'
import Paragraph from '@components/Paragraph'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { PaymentProps } from './Payment.types'
import * as Styled from './styles/Payment.style'
import CheckoutPanel from '../CheckoutPanel'

const Payment: FC<PaymentProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
  checkoutForm,
  paymentIntent,
  setIsLoading,
}: PaymentProps): ReactElement => {
  const { cart, shippingRate, customerId, customer } = useContext(PageContext) as PageContextProps

  const stripe = useStripe()
  const elements = useElements()

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: 'tabs',
  }

  const updatePaymentIntent = async () => {
    await fetch('/api/checkout/update-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cart,
        shippingRate,
        paymentIntent,
        checkoutForm,
      }),
    })
  }

  useEffect(() => {
    if (panelIndex !== activePanel) return
    updatePaymentIntent()
  }, [activePanel])

  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Payment'>
      <Formik
        initialValues={checkoutForm}
        onSubmit={async (values) => {
          setIsLoading(true)
          if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return
          }

          // Create Order
          const order = await fetch('/api/order/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              billingAddress: values.billing,
              shippingAddress: values.shipping,
              voucher: checkoutForm.voucher,
              cart,
              customer_id: customer?.id || customerId,
              shippingRate,
            }),
          })

          const orderData = await order.json()
          sessionStorage.setItem('orderId', orderData.id)

          // Create Subscription
          const subsciption = await fetch('/api/subscription/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              customerId: customer?.id || customerId,
              billingAddress: values.billing,
              shippingAddress: values.shipping,
              parentOrder: orderData.id,
              cart,
              shippingRate,
            }),
          })

          const subscriptionData = await subsciption.json()
          sessionStorage.setItem('subscriptionId', subscriptionData.id)

          const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              // Make sure to change this to your payment completion page
              return_url: `${process.env.NEXT_PUBLIC_CHECKOUT_RETURN_URL}`,
            },
          })

          console.log(error)

          setIsLoading(false)
        }}
      >
        <Form>
          <Styled.PaymentWrapper>
            <PaymentElement id='payment-element' options={paymentElementOptions} />
          </Styled.PaymentWrapper>
          <Paragraph size={1} font='Cera'>
            By clicking Checkout Now, you agree with our{' '}
            <Link size={1} font='Cera' href='/terms-and-conditions'>
              Terms and Conditions
            </Link>{' '}
            and{' '}
            <Link size={1} font='Cera' href='/privacy-policy'>
              Privacy Policy
            </Link>
          </Paragraph>
          <Button type='submit' text='Checkout Now' size={1} />
        </Form>
      </Formik>
    </CheckoutPanel>
  )
}

export default Payment
