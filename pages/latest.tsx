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
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={{ title: 'Latest | The Gentleman\'s Journal'  }}>
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