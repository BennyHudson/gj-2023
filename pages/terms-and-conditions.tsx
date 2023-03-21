import React, { FC, ReactElement, useEffect, useContext } from 'react'
import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { pageQuery } from '@queries/pages/page'

import PageLayout from '@components/PageLayout'
import HeroImage from '@components/HeroImage'
import Section from '@components/Section'
import Masthead from '@components/Masthead'
import PageContentBlock from '@components/PageContentBlock'

import PageContext, { PageContextProps } from '@context/PageContext'
import { siteOptionsQuery } from '@queries/global/site-options'

const TeamPage: FC = ({ headerNav, footerNav, pageData, siteOptions }): ReactElement => {
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
      <HeroImage featuredImage={pageData.featuredImage.node.sourceUrl} height={1} />
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

export default TeamPage

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
    // revalidate: 60,
  }
}
