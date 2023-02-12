import React, { FC, ReactElement, useContext, useEffect } from 'react'

import PageContext, { PageContextProps } from '@context/PageContext'

import Section from '@components/Section'
import Breadcrumbs from '@components/Breadcrumbs'
import Title from '@components/Title'

import Feed from '@components/Feed'
import client from '@lib/apollo-client'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import PageLayout from '@components/PageLayout'
import { useBreakpoints } from '@hooks/useBreakpoints'
import BannerAdvert from '@components/BannerAdvert'

const LatestPage: FC = ({ headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  const { mdAndBelow } = useBreakpoints()

  useEffect(() => {
    setActiveNavElement(0)
  }, [setActiveNavElement])

  const breadcrumbLinks = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Latest',
      url: '/latest',
    },
  ]

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} headerStyle='standard' seo={{ title: 'Latest | The Gentleman\'s Journal' }}>
      <BannerAdvert slot='GJ_970x250_001' />
      <Section>
        <Breadcrumbs links={breadcrumbLinks} />
        <Title title='Latest' />
        <Feed count={mdAndBelow ? 12 : 20} />
      </Section>
    </PageLayout>
  )
}

export default LatestPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
    },
  }
}
