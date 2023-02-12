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
import { useRouter } from 'next/router'
import Paragraph from '@components/Paragraph'
import EditButton from '@components/EditButton'

const CheckoutPage: FC = ({ headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement, cart } = useContext(PageContext) as PageContextProps

  const [clientSecret, setClientSecret] = useState('')
  const [paymentIntentId, setPaymentIntentId] = useState('')

  // const router = useRouter()

  // // useEffect(() => {
  // //   if (!cart.length) {
  // //     router.push('/cart')
  // //   }
  // // }, [])

  const stripePromise = loadStripe('pk_test_8iwfeNCkfxOmOZkWESHhGYwe')

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
    if (!cart) return
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
        image='https://www.thegentlemansjournal.com/wp-content/uploads/2019/09/ryan-reynolds-gentlemans-journal-aviation-gin-1.jpg'
        title='Checkout'
      >
        {!cart.length &&
          <>
            <Paragraph size={2} font='Cera'>Your cart is empty</Paragraph>
            <EditButton href='/club' text='Sign Up' />
          </>
        }
        {clientSecret &&
          <Elements options={options} stripe={stripePromise}>
            <Checkout paymentIntent={paymentIntentId} />
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
