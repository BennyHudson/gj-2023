import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import HeroImage from '@components/HeroImage'
import Masthead from '@components/Masthead'
import PageContentBlock from '@components/PageContentBlock'
import PageLayout from '@components/PageLayout'
import Section from '@components/Section'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import client from '@lib/apollo-client'


import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { Page } from '@queries/pages/page'
import { pageQuery } from '@queries/pages/page'
import type { PageData } from '@typings/PageData.types'

interface TermsPageProps extends PageData {
  pageData: Page
}

const TermsPage: FC<TermsPageProps> = ({ headerNav, footerNav, pageData, siteOptions }: TermsPageProps): ReactElement => {
  const breadcrumbs = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: pageData.title,
      url: pageData.uri,
    },
  ]

  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={pageData.seo} siteOptions={siteOptions} databaseId={9}>
      <HeroImage featuredImage={pageData.featuredImage.node.fullSize} height={1} />
      <Section containerWidth='narrow'>
        <Masthead
          breadcrumbs={breadcrumbs}
          title={pageData.title}
          subtitle={pageData.additionalPageData.subtitleText.replace(/<\/?[^>]+(>|$)/g, '')}
        />
        <PageContentBlock content={pageData.content} />
      </Section>
    </PageLayout>
  )
}

export default TermsPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const pageData = await client.query(pageQuery(9))

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      pageData: pageData.data.page,
    },
    revalidate: 60,
  }
}
