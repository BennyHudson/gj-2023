import React, { FC, ReactElement, useContext, useEffect } from 'react'

import PageContext, { PageContextProps } from '@context/PageContext'

import Section from '@components/layout/Section'
import Breadcrumbs from '@components/typography/Breadcrumbs'
import Title from '@components/typography/Title'

import Feed from '@components/grids/Feed'
import client from '@lib/apollo-client'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import PageLayout from '@components/layout/PageLayout'

const LatestPage: FC = ({ headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(0)
  }, [setActiveNavElement])

  const breadcrumbLinks = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Latest',
      url: '/latest'
    },
  ]

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <Section>
        <Breadcrumbs links={breadcrumbLinks} />
        <Title title='Latest' />
        <Feed />
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
    }
  }
}