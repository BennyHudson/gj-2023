import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import ErrorPageTemplate from '@components/ErrorPageTemplate'
import PageLayout from '@components/PageLayout'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import client from '@lib/apollo-client'


import { page404Query } from '@queries/global/404-page'
import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { PageData } from '@typings/PageData.types'

interface ErrorPageProps extends PageData {
  backgroundImage: string
}

const ErrorPage: FC<ErrorPageProps> = ({ headerNav, footerNav, backgroundImage, siteOptions }: ErrorPageProps): ReactElement => {
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

export default ErrorPage

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
      backgroundImage: errorPageData.data.gjOptions.error404.errorBackgroundImage.fullSize,
    },
  }
}
