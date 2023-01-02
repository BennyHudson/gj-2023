import React, { FC, ReactElement, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import GlobalStyle from '@styles/GlobalStyle'
import { gjTheme } from '@themes/gjTheme'

import PageContext, { PageContextType } from '@context/PageContext'

import useKeyPress from '@hooks/useKeyPress'

import Header from '@components/Header'
import Footer from '@components/Footer'
import ContainedModal from '@components/ContainedModal'

import * as Styled from './styles/PageLayout.style'

import { PageLayoutProps } from './PageLayout.types'

const PageLayout: FC<PageLayoutProps> = ({ children, locationPath }: PageLayoutProps): ReactElement => {
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
  }, [locationPath])

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
        <Styled.PageLayout>
          <Header headerStyle={locationPath === '/' ? 'feature' : 'standard'} />
          <Styled.Page>
            {children}
          </Styled.Page>
          <CSSTransition
            in={!!showModal}
            timeout={400}
            unmountOnExit
          >
            <ContainedModal>{showModal}</ContainedModal>
          </CSSTransition>
          <Footer />
        </Styled.PageLayout>
      </PageContext.Provider>
      
    </ThemeProvider>
  )
}

export default PageLayout