import React, { FC, ReactElement, useEffect, useContext, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'

import PageContext, { PageContextProps } from '@context/PageContext'
import Checkout from '@components/Checkout'

const CheckoutPage: FC = ({ headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement, cart } = useContext(PageContext) as PageContextProps

  const [clientSecret, setClientSecret] = useState('')

  const stripePromise = loadStripe('pk_test_8iwfeNCkfxOmOZkWESHhGYwe')

  const createPaymentIntent = async () => {
    const paymentIntent = await fetch('/api/checkout/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    })

    const response = await paymentIntent.json()
    setClientSecret(response.clientSecret)
  }

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  useEffect(() => {
    cart && createPaymentIntent()
  }, [])

  const appearance = {
    theme: 'stripe',
  }

  const options = {
    clientSecret,
    appearance,
  }

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={{ title: 'Checkout | The Gentleman\'s Journal' }}>
      <SplitPageTemplate
        image='https://www.thegentlemansjournal.com/wp-content/uploads/2019/09/ryan-reynolds-gentlemans-journal-aviation-gin-1.jpg'
        title='Checkout'
      >
        {clientSecret &&
          <Elements options={options} stripe={stripePromise}>
            <Checkout />
          </Elements>
        }
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default CheckoutPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
    },
  }
}
