import type { FC, ReactElement} from 'react'
import React, { useContext, useEffect } from 'react'

import BannerAdvert from '@components/BannerAdvert'
import Breadcrumbs from '@components/Breadcrumbs'
import Feed from '@components/Feed'
import PageLayout from '@components/PageLayout'
import Section from '@components/Section'
import Title from '@components/Title'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import { useBreakpoints } from '@hooks/useBreakpoints'

import client from '@lib/apollo-client'

import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'

const LatestPage: FC = ({ headerNav, footerNav, siteOptions }): ReactElement => {
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
    <PageLayout
      headerNav={headerNav}
      footerNav={footerNav}
      headerStyle='standard'
      seo={{ title: 'Latest | The Gentleman\'s Journal' }}
      siteOptions={siteOptions}
    >
      <BannerAdvert parent='gj_970x250' slot='GJ_970x250_001' />
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
  const siteOptions = await client.query(siteOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
    },
  }
}
