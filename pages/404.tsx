import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/PageLayout'
import ErrorPageTemplate from '@components/ErrorPageTemplate'

import PageContext, { PageContextProps } from '@context/PageContext'
import { page404Query } from '@queries/global/404-page'
import { siteOptionsQuery } from '@queries/global/site-options'

const SearchPage: FC = ({ headerNav, footerNav, backgroundImage, siteOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={{ title: '404 | The Gentleman\'s Journal' }} siteOptions={siteOptions}>
      <ErrorPageTemplate backgroundImage={backgroundImage} />
    </PageLayout>
  )
}

export default SearchPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const errorPageData = await client.query(page404Query)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      backgroundImage: errorPageData.data.gjOptions.error404.errorBackgroundImage.sourceUrl,
    },
  }
}
