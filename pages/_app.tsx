import React, { FC, ReactElement, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import jwt_decode from 'jwt-decode'

import PageContext, { PageContextProps } from '@context/PageContext'

import '@assets/styles/fonts.css'

import GlobalStyle from '@styles/GlobalStyle'
import { gjTheme } from '@themes/gjTheme'

import client from '@lib/apollo-client'

import Scripts from '@components/Scripts'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps): ReactElement => {
  const [token, setToken] = useState<PageContextProps['token']>()
  const [activeNavElement, setActiveNavElement] = useState<PageContextProps['headerHeight']>(-1)
  const [headerHeight, setHeaderHeight] = useState<PageContextProps['headerHeight']>(0)
  const [customerId, setCustomerId] = useState<PageContextProps['customerId']>()
  const [cart, setCart] = useState<PageContextProps['cart']>([])
  const [shippingRate, setShippingRate] = useState<PageContextProps['shippingRate']>()
  const [customer, setCustomer] = useState<PageContextProps['customer']>()
  const [subscriptions, setSubscriptions] = useState()

  const getCustomerData = async (id: number) => {
    const customerDetails = await fetch(`/api/user/${id}`)
    const customerData = await customerDetails.json()

    setCustomer(customerData)

    if (customerData) {
      const subscriptionIds = customerData.meta_data.find((meta) => meta.key === '_wcs_subscription_ids_cache')

      const subs = []

      await Promise.all(
        subscriptionIds.value.map(async (subscriptionId: number) => {
          const subscription = await fetch(`/api/subscription/${subscriptionId}`)
          const sub = await subscription.json()
          subs.push(sub)
        }),
      )

      setSubscriptions(subs)
    }
  }

  useEffect(() => {
    const gjCart = localStorage.getItem('cart')
    if (gjCart) {
      setCart(gjCart.split(','))
    }
  }, [])

  useEffect(() => {
    const gjToken = localStorage.getItem('gjToken')
    if (gjToken) {
      setToken(gjToken)
      const decodedToken: number = jwt_decode(gjToken)
      getCustomerData(decodedToken.data.user.id)
    }
  }, [])

  const cmsUrl = 'https://cms.thegentlemansjournal.com'

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={gjTheme}>
          <GlobalStyle />
          <Scripts />
          <PageContext.Provider
            value={{
              cmsUrl,
              apiUrl: `${cmsUrl}/wp-json/wp/v2`,
              activeNavElement,
              setActiveNavElement,
              headerHeight,
              setHeaderHeight,
              token,
              setToken,
              customerId,
              setCustomerId,
              cart,
              setCart,
              shippingRate,
              setShippingRate,
              customer,
              setCustomer,
              subscriptions,
              getCustomerData,
            }}
          >
            <Component {...pageProps} />
          </PageContext.Provider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default App
