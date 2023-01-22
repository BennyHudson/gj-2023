import React, { FC, ReactElement, useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

// import useKeyPress from '@hooks/useKeyPress'

import PageContext, { PageContextProps } from '@context/PageContext'

import '@assets/styles/fonts.css'

import GlobalStyle from '@styles/GlobalStyle'
import { gjTheme } from '@themes/gjTheme'

import client from '@lib/apollo-client'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps): ReactElement => {
  const [ token, setToken ] = useState<PageContextProps['token']>()
  const [ activeNavElement, setActiveNavElement ] = useState<PageContextProps['headerHeight']>(-1)
  const [ headerHeight, setHeaderHeight ] = useState<PageContextProps['headerHeight']>(0)
  const [ customerId, setCustomerId ] = useState<PageContextProps['customerId']>()
  const [ cart, setCart ] = useState([])

  // const keyPress = useKeyPress()

  // useEffect(() => {
  //   if (!keyPress) return

  //   if (keyPress.key === 'Escape') {

  //   }
  // }, [keyPress])

  const cmsUrl = 'https://thegentlemansjournal.com'

  return (
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
          }}
        >
          <Component {...pageProps} />
        </PageContext.Provider>
      </ThemeProvider>    
    </ApolloProvider>
  )
}

export default App