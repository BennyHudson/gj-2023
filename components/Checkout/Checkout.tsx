import React, { ReactElement, FC, useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStripe } from '@stripe/react-stripe-js'
import Script from 'next/script'

import PageContext, { PageContextProps } from '@context/PageContext'

import Notification from '@components/Notification'

import CustomerDetails from './components/CustomerDetails'
import BillingAddress from './components/BillingAddress'
import ShippingAddress from './components/ShippingAddress'
import VoucherCode from './components/VoucherCode'
import OrderSummary from './components/OrderSummary'
import Payment from './components/Payment'

import * as Styled from './styles/Checkout.style'

import { CheckoutProps, CheckoutState } from './Checkout.types'

const Checkout: FC<CheckoutProps> = ({ paymentIntent }: CheckoutProps): ReactElement => {
  const { setCart, getCustomerData, customer } = useContext(PageContext) as PageContextProps

  const [activePanel, setActivePanel] = useState<CheckoutState['activePanel']>(1)
  const [message, setMessage] = useState<CheckoutState['message']>('')
  const [checkoutForm, setCheckoutForm] = useState<CheckoutState['checkoutForm']>({
    billing: {
      first_name: '',
      last_name: '',
      address_1: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
    },
    shipping: {
      address_1: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
    }
  })
  const [isLoading, setIsLoading] = useState<CheckoutState['isLoading']>(false)
  const [notificationState, setNotificationState] = useState<CheckoutState['notificationState']>('error')

  const stripe = useStripe()
  const router = useRouter()

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret')

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(async ({ paymentIntent }) => {
      if (!paymentIntent) return 

      const { payment_method, status } = paymentIntent

      const paymentMethod = await fetch('/api/checkout/save-payment-method', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payment_method),
      })

      const stripeCustomerId = await paymentMethod.json()

      if (status === 'succeeded') {
        setNotificationState('success')
        setMessage('Your purchase was successful, you are being redirected to the Clubhouse')

        const subscriptionId = sessionStorage.getItem('subscriptionId')
        const addSubscriptionPaymentMethod = await fetch(`/api/subscription/update-payment-method/${subscriptionId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            stripeCustomerId,
            payment_method,
          }),
        })
        const completedSubscription = await addSubscriptionPaymentMethod.json()

        const orderId = sessionStorage.getItem('orderId')
        const completeOrder = await fetch(`/api/order/complete/${orderId}`)
        const completeOrderData = await completeOrder.json()

        if (completedSubscription.status === 'active' && completeOrderData.status === 'completed') {
          sessionStorage.removeItem('orderId')
          sessionStorage.removeItem('subscriptionId')

          getCustomerData(customer!.id)

          router.push('/clubhouse').then(() => {
            setCart([])
            localStorage.removeItem('cart')
          })
        }

        return
      }

      switch (status) {
      case 'processing':
        setMessage('Your payment is processing.')
        break
      case 'requires_payment_method':
        setMessage('Your payment was not successful, please try again.')
        break
      default:
        setMessage('Something went wrong.')
        break
      }
    })
  }, [stripe])

  if (message) {
    return (
      <>
        {notificationState === 'success' &&
          <Script id='google-conversion'>
            {`
              gtag('event', 'conversion', {
                'send_to': 'AW-10918806122/4eoqCOWNncEDEOqEv9Yo',
                'value': 59.95,
                'currency': 'GBP',
                'transaction_id': ''
              });
            `}
          </Script>
        }
        <Notification state={notificationState} text={message} />
      </>
    )
  }

  return (
    <Styled.CheckoutPanels isLoading={isLoading}>
      <CustomerDetails
        activePanel={activePanel}
        panelIndex={1}
        setActivePanel={setActivePanel}
        setCheckoutForm={setCheckoutForm}
      />
      <BillingAddress
        activePanel={activePanel}
        panelIndex={2}
        setActivePanel={setActivePanel}
        checkoutForm={checkoutForm}
        setCheckoutForm={setCheckoutForm}
      />
      <ShippingAddress
        activePanel={activePanel}
        panelIndex={3}
        setActivePanel={setActivePanel}
        checkoutForm={checkoutForm}
        setCheckoutForm={setCheckoutForm}
      />
      <VoucherCode
        activePanel={activePanel}
        panelIndex={4}
        setActivePanel={setActivePanel}
        checkoutForm={checkoutForm}
        setCheckoutForm={setCheckoutForm}
      />
      <OrderSummary
        activePanel={activePanel}
        panelIndex={5}
        setActivePanel={setActivePanel}
        checkoutForm={checkoutForm}
        setCheckoutForm={setCheckoutForm}
      />
      <Payment
        activePanel={activePanel}
        panelIndex={6}
        setActivePanel={setActivePanel}
        checkoutForm={checkoutForm}
        setCheckoutForm={setCheckoutForm}
        paymentIntent={paymentIntent}
        setIsLoading={setIsLoading}
      />
    </Styled.CheckoutPanels>
  )
}

export default Checkout
