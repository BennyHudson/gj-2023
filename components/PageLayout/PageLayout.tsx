import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

import Header from '@components/Header'
import Footer from '@components/Footer'
import HeadTags from '@components/HeadTags'

import * as Styled from './styles/PageLayout.style'

import { PageLayoutProps } from './PageLayout.types'

const PageLayout: FC<PageLayoutProps> = ({
  children,
  headerNav,
  footerNav,
  seo,
  headerStyle = 'feature',
}: PageLayoutProps): ReactElement => {
  return (
    <Styled.PageLayout>
      <HeadTags seo={seo} />
      <Styled.Background>
        <Image src='/svg/logo-small.svg' width={50} height={50} alt='' />
      </Styled.Background>
      <Header headerStyle={headerStyle} headerNav={headerNav} />
      <Styled.Page>{children}</Styled.Page>
      <Footer footerNav={footerNav} />
    </Styled.PageLayout>
  )
}

export default PageLayout
