import React, { FC, ReactElement, useEffect, useContext } from 'react'
import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { pageQuery } from '@queries/pages/page'

import PageLayout from '@components/PageLayout'
import HeroImage from '@components/HeroImage'
import Section from '@components/Section'
import Masthead from '@components/Masthead'

import PageContext, { PageContextProps } from '@context/PageContext'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

const TeamPage: FC = ({ 
  headerNav,
  footerNav,
  pageData,
}): ReactElement => {
  console.log(pageData)

  const breadcrumbs = [
    {
      text: 'Home',
      url: '/'
    },
    {
      title: pageData.title,
      url: pageData.uri,
    },
  ]

  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={pageData.seo}>
      <HeroImage featuredImage={pageData.featuredImage.node.sourceUrl} height={1} />
      <Section containerWidth='narrow'>
        <Masthead
          breadcrumbs={breadcrumbs}
          title={pageData.title}
          subtitle={pageData.additionalPageData.subtitleText.replace(/<\/?[^>]+(>|$)/g, '')}
        />
        <RawHtmlWrapper content={pageData.content} />
      </Section>
    </PageLayout>
  )
}

export default TeamPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const pageData = await client.query(pageQuery(9))

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      pageData: pageData.data.page,
    },
    // revalidate: 60,
  }
}
