import React, { FC, ReactElement, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

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
  const [cart, setCart] = useState([])
  const [shippingRate, setShippingRate] = useState()

  useEffect(() => {
    const gjToken = localStorage.getItem('gjToken')
    if (gjToken) {
      setToken(gjToken)
    }

    const gjCart = localStorage.getItem('cart')
    if (gjCart) {
      setCart(gjCart.split(','))
    }
  }, [])

  const cmsUrl = 'https://thegentlemansjournal.com'

  return (
    <>
      <Scripts />
      <ApolloProvider client={client}>
        <ThemeProvider theme={gjTheme}>
          <GlobalStyle />
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
