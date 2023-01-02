import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { gql } from '@apollo/client'

import PageContext, { PageContextType } from '@context/PageContext'
import useKeyPress from '@hooks/useKeyPress'

import { headerNav } from '@queries/global/header-nav'

import PageLayout from '@components/PageLayout'

import GlobalStyle from '../styles/GlobalStyle'
import { gjTheme } from '../themes/gjTheme'
import '../assets/styles/fonts.css'
import client from '../apollo-client'

export default function App({ Component, pageProps, data }: AppProps) {
  const [ headerHeight, setHeaderHeight ] = useState<PageContextType['headerHeight']>(0)
  const [ showModal, setShowModal ] = useState<PageContextType['showModal']>()
  const [ searchTerm, setSearchTerm ] = useState<PageContextType['searchTerm']>()
  const [ searchResults, setSearchResults ] = useState<PageContextType['searchResults']>([])
  const [ searchPage, setSearchPage ] = useState<PageContextType['searchPage']>(1)
  const [ featuredImages, setFeaturedImages ] = useState<PageContextType['featuredImages']>([])

  const keyPress = useKeyPress()

  useEffect(() => {
    setSearchResults([])
    setShowModal(null)
    setSearchTerm('')
  }, [])

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
    <ThemeProvider theme={gjTheme}>
      <GlobalStyle />
      <PageContext.Provider
        value={{
          cmsUrl, 
          apiUrl: `${cmsUrl}/wp-json/wp/v2`,
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
          featuredImages,
          setFeaturedImages,
        }}
      >
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </PageContext.Provider>
    </ThemeProvider>    
  )
}

export async function getStaticProps() {
  const response = await client.query({
    query: gql`
      query homepageQuery {
        page(id: "cG9zdDo3NDE3NA==") {
          title
        }
      }
    `,
  })

  const headerNavigation = await client.query(headerNav)

  return {
    props: {
      data: response.data,
      headerNavigation: headerNavigation.data,
    }
  }
}