import React, { ReactElement, FC, useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStripe } from '@stripe/react-stripe-js'

import PageContext, { PageContextProps } from '@context/PageContext'

import CustomerDetails from './components/CustomerDetails'
import BillingAddress from './components/BillingAddress'
import ShippingAddress from './components/ShippingAddress'
import OrderSummary from './components/OrderSummary'
import Payment from './components/Payment'

import * as Styled from './styles/Checkout.style'
import Notification from '@components/Notification'

const Checkout: FC = ({ paymentIntent }): ReactElement => {
  const { setCart, getCustomerData, customer } = useContext(PageContext) as PageContextProps

  const [activePanel, setActivePanel] = useState(1)
  const [message, setMessage] = useState('')
  const [checkoutForm, setCheckoutForm] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [notificationState, setNotificationState] = useState('error')

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
    return <Notification state={notificationState} text={message} />
  }

  return (
    <Styled.CheckoutPanels isLoading={isLoading}>
      <CustomerDetails
        activePanel={activePanel}
        panelIndex={1}
        setActivePanel={setActivePanel}
        checkoutForm={checkoutForm}
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
      <OrderSummary
        activePanel={activePanel}
        panelIndex={4}
        setActivePanel={setActivePanel}
        checkoutForm={checkoutForm}
        setCheckoutForm={setCheckoutForm}
      />
      <Payment
        activePanel={activePanel}
        panelIndex={5}
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
