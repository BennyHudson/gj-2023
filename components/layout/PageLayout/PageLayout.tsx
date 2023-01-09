/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useContext, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useRouter } from 'next/router'
import Image from 'next/image'

import PageContext, { PageContextProps } from '@context/PageContext'

import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import ContainedModal from '@components/layout/ContainedModal'

import { HeaderProps } from '@components/layout/Header/Header.types'

import * as Styled from './styles/PageLayout.style'

import { PageLayoutProps } from './PageLayout.types'
import PageTransition from '@components/layout/PageTransition'

const PageLayout: FC<PageLayoutProps> = ({ children, headerNav, footerNav }: PageLayoutProps): ReactElement => {
  const { pathname } = useRouter()

  const { setSearchResults, setShowModal, setSearchTerm, showModal } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setSearchResults([])
    setShowModal(null)
    setSearchTerm('')
  }, [pathname])

  const useFeatureHeader = (): HeaderProps['headerStyle'] => {
    if (pathname === '/') return 'feature'
    if (pathname === '/podcasts') return 'feature'
    if (pathname === '/gj-sessions') return 'feature'
    if (pathname === '/club') return 'feature'
    if (pathname.includes('article')) return 'feature'
    if (pathname.includes('gift-guide')) return 'feature'
    return 'standard'
  }
    
  return (
    <Styled.PageLayout>
      <Styled.Background>
        <Image src='/svg/logo-small.svg' width={50} height={50} alt='' />
      </Styled.Background>
      <Header 
        headerStyle={useFeatureHeader()} 
        headerNav={headerNav}
      />
      <Styled.Page>
        <PageTransition>
          {children}
        </PageTransition>
      </Styled.Page>
      <CSSTransition
        in={!!showModal}
        timeout={400}
        unmountOnExit
      >
        <ContainedModal>{showModal}</ContainedModal>
      </CSSTransition>
      <Footer footerNav={footerNav} />
    </Styled.PageLayout>
  )
}

export default PageLayout