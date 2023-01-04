import React, { FC, ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import PageLayout from '@components/PageLayout'

import GlobalStyle from '@styles/GlobalStyle'
import { gjTheme } from '@themes/gjTheme'
import '@assets/styles/fonts.css'
import client from '@lib/apollo-client'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={gjTheme}>
        <GlobalStyle />
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>        
      </ThemeProvider>    
    </ApolloProvider>
  )
}

export default App