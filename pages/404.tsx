import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/PageLayout'
import ErrorPageTemplate from '@components/ErrorPageTemplate'

import PageContext, { PageContextProps } from '@context/PageContext'
import { page404Query } from '@queries/global/404-page'

const SearchPage: FC = ({ headerNav, footerNav, backgroundImage }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={{ title: '404 | The Gentleman\'s Journal' }}>
      <ErrorPageTemplate backgroundImage={backgroundImage} />
    </PageLayout>
  )
}

export default SearchPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const errorPageData = await client.query(page404Query)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      backgroundImage: errorPageData.data.gjOptions.error404.errorBackgroundImage.sourceUrl,
    },
  }
}
