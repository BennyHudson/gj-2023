import React, { FC, ReactElement, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import GlobalStyle from '@styles/GlobalStyle'
import { gjTheme } from '@themes/gjTheme'

import PageContext, { PageContextProps } from '@context/PageContext'

import useKeyPress from '@hooks/useKeyPress'

import Header from '@components/Header'
import Footer from '@components/Footer'
import ContainedModal from '@components/ContainedModal'

import * as Styled from './styles/PageLayout.style'

import { PageLayoutProps } from './PageLayout.types'

const PageLayout: FC<PageLayoutProps> = ({ children, locationPath }: PageLayoutProps): ReactElement => {
  const [ activeNavElement, setActiveNavElement ] = useState<PageContextProps['headerHeight']>(-1)
  const [ headerHeight, setHeaderHeight ] = useState<PageContextProps['headerHeight']>(0)
  const [ showModal, setShowModal ] = useState<PageContextProps['showModal']>()
  const [ searchTerm, setSearchTerm ] = useState<PageContextProps['searchTerm']>()
  const [ searchResults, setSearchResults ] = useState<PageContextProps['searchResults']>([])
  const [ searchPage, setSearchPage ] = useState<PageContextProps['searchPage']>(1)
  const [ navLoaded, setNavLoaded ] = useState<PageContextProps['navLoaded']>(false)

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