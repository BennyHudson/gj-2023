import React, { ReactElement, FC, useState, useContext, useEffect } from 'react'
import { Formik } from 'formik'

import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import jwt_decode from 'jwt-decode'
import useSwr from 'swr'

import Heading from '@components/Heading'
import EditButton from '@components/EditButton'
import Button from '@components/Button'
import TextField from '@components/TextField'
import Select from '@components/Select'
import NameField from '@components/NameField'
import Cart from '@components/Cart'

import CustomerDetails from './components/CustomerDetails'

import * as Styled from './styles/Checkout.style'

import { countries } from './countries'
import PageContext, { PageContextProps } from '@context/PageContext'
import { useRouter } from 'next/router'
import BillingAddress from './components/BillingAddress'
import ShippingAddress from './components/ShippingAddress'
import OrderSummary from './components/OrderSummary'
import Password from './components/Password'
import Payment from './components/Payment'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Checkout: FC = ({ paymentIntent }): ReactElement => {
  const { setCart } = useContext(PageContext) as PageContextProps

  const [activePanel, setActivePanel] = useState(1)
  const [message, setMessage] = useState('')
  const [checkoutForm, setCheckoutForm] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const stripe = useStripe()
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
        setMessage('Your purchase was successful, you are being redirected to the Clubhouse')

        const subscriptionId = sessionStorage.getItem('subscriptionId')
        const addSubscriptionPaymentMethod = await fetch(`/api/subscription/update-payment-method/${subscriptionId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            stripeCustomerId,
            payment_method,
          })
        })
        const completedSubscription = await addSubscriptionPaymentMethod.json()

        const orderId = sessionStorage.getItem('orderId')
        const completeOrder = await fetch(`/api/order/complete/${orderId}`)
        const completeOrderData = await completeOrder.json()

        if (completedSubscription.status === 'active' && completeOrderData.status === 'completed') {
          sessionStorage.removeItem('orderId')
          sessionStorage.removeItem('subscriptionId')
  
          setCart([])
          localStorage.removeItem('cart')

          router.push('/clubhouse')
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
        {message}
      </>
    )
  }

  return (
    <>
      <Styled.CheckoutPanels>
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
        />
      </Styled.CheckoutPanels>
    </>
  )
}

export default Checkout

