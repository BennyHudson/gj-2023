import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect, useState } from 'react'

import Checkout from '@components/Checkout'
import EditButton from '@components/EditButton'
import PageLayout from '@components/PageLayout'
import Paragraph from '@components/Paragraph'
import SplitPageTemplate from '@components/SplitPageTemplate'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import client from '@lib/apollo-client'

import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
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
    <PageLayout
      headerNav={headerNav}
      footerNav={footerNav}
      headerStyle='standard'
      seo={{ title: 'Checkout | The Gentleman\'s Journal' }}
      siteOptions={siteOptions}
    >
      <SplitPageTemplate image={featuredImageUrl(siteOptions.gjOptions.splitPageImages.checkoutPage.fullSize)} title='Checkout'>
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
      siteOptions: siteOptions.data,
    },
  }
}
