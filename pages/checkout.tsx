import React, { FC, ReactElement, useEffect, useContext, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'
import Checkout from '@components/Checkout'
import Paragraph from '@components/Paragraph'
import EditButton from '@components/EditButton'

import PageContext, { PageContextProps } from '@context/PageContext'
import featuredImageUrl from '@helpers/featuredImageUrl'
import { siteOptionsQuery } from '@queries/global/site-options'

const CheckoutPage: FC = ({ headerNav, footerNav, siteOptions }): ReactElement => {
  const { setActiveNavElement, cart } = useContext(PageContext) as PageContextProps

  const [clientSecret, setClientSecret] = useState('')
  const [paymentIntentId, setPaymentIntentId] = useState('')

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  const createPaymentIntent = async () => {
    const paymentIntent = await fetch('/api/checkout/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    })

    const response = await paymentIntent.json()
    setClientSecret(response.clientSecret)
    setPaymentIntentId(response.id)
  }

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  useEffect(() => {
    if (!cart.length) return
    createPaymentIntent()
  }, [cart])

  const appearance = {
    theme: 'stripe',
  }

  const options = {
    clientSecret,
    appearance,
  }

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} headerStyle='standard' seo={{ title: 'Checkout | The Gentleman\'s Journal' }}>
      <SplitPageTemplate
        image={featuredImageUrl(siteOptions.splitPageImages.checkoutPage.sourceUrl)}
        title='Checkout'
      >
        {!cart.length && (
          <>
            <Paragraph size={2} font='Cera'>
              Your cart is empty
            </Paragraph>
            <EditButton href='/club' text='Sign Up' />
          </>
        )}
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <Checkout paymentIntent={paymentIntentId} />
          </Elements>
        )}
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default CheckoutPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data.gjOptions,
    },
  }
}
