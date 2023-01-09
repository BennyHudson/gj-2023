import React, { FC, ReactElement, useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import useKeyPress from '@hooks/useKeyPress'

import PageContext, { PageContextProps } from '@context/PageContext'

import '@assets/styles/fonts.css'

import GlobalStyle from '@styles/GlobalStyle'
import { gjTheme } from '@themes/gjTheme'

import client from '@lib/apollo-client'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps): ReactElement => {
  const [ activeNavElement, setActiveNavElement ] = useState<PageContextProps['headerHeight']>(-1)
  const [ headerHeight, setHeaderHeight ] = useState<PageContextProps['headerHeight']>(0)
  const [ showModal, setShowModal ] = useState<PageContextProps['showModal']>()
  const [ searchTerm, setSearchTerm ] = useState<PageContextProps['searchTerm']>()
  const [ searchResults, setSearchResults ] = useState<PageContextProps['searchResults']>([])
  const [ searchPage, setSearchPage ] = useState<PageContextProps['searchPage']>(1)
  const [ navLoaded, setNavLoaded ] = useState<PageContextProps['navLoaded']>(false)

  const keyPress = useKeyPress()

  useEffect(() => {
    if (!keyPress) return

    if (keyPress.key === 'Escape') {
      setSearchResults([])
      setShowModal(null)
      setSearchTerm('')
    }
  }, [keyPress])

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
            showModal,
            setShowModal,
            searchTerm,
            setSearchTerm,
            searchResults,
            setSearchResults,
            searchPage,
            setSearchPage,
            navLoaded, 
            setNavLoaded,
          }}
        >
          <Component {...pageProps} />
        </PageContext.Provider>
      </ThemeProvider>    
    </ApolloProvider>
  )
}

export default App