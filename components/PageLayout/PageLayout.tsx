/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Header from '@components/Header'
import Footer from '@components/Footer'
import HeadTags from '@components/HeadTags'

import { HeaderProps } from '@components/Header/Header.types'

import * as Styled from './styles/PageLayout.style'

import { PageLayoutProps } from './PageLayout.types'

const PageLayout: FC<PageLayoutProps> = ({ children, headerNav, footerNav, seo }: PageLayoutProps): ReactElement => {
  const { pathname } = useRouter()

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
      <HeadTags seo={seo} />
      <Styled.Background>
        <Image src='/svg/logo-small.svg' width={50} height={50} alt='' />
      </Styled.Background>
      <Header headerStyle={useFeatureHeader()} headerNav={headerNav} />
      <Styled.Page>{children}</Styled.Page>
      <Footer footerNav={footerNav} />
    </Styled.PageLayout>
  )
}

export default PageLayout
