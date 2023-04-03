import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { sessionsFeatureQuery } from '@queries/homepage/sessions-feature'

import PageContext, { PageContextProps } from '@context/PageContext'

import TitleAndIntro from '@components/TitleAndIntro'
import Thumbnail from '@components/Thumbnail'
import SessionsHeader from '@components/SessionsHeader'
import BannerAdvert from '@components/BannerAdvert'
import SessionsFeed from '@components/SessionsFeed'
import SessionsSponsor from '@components/SessionsSponsor'
import PageLayout from '@components/PageLayout'
import { sessionsQuery } from '@queries/pages/sessions'
import { siteOptionsQuery } from '@queries/global/site-options'

const SessionsPage: FC = ({ pageData, featuredArticle, headerNav, footerNav, siteOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(7)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={pageData.seo} siteOptions={siteOptions} databaseId={pageData.databaseId}>
      <SessionsHeader>
        <TitleAndIntro title={pageData.title.toUpperCase()} intro={pageData.sessions.sessions.sessionsIntroText} inverse />
        <Thumbnail
          showTitle
          featuredImage={featuredArticle.articles.nodes[0].featuredImage.node.large}
          to={featuredArticle.articles.nodes[0].uri}
          title={featuredArticle.articles.nodes[0].title}
          date={featuredArticle.articles.nodes[0].date}
          categories={featuredArticle.articles.nodes[0].categories}
        />
      </SessionsHeader>
      <BannerAdvert parent='gj_970x250' slot='GJ_970x250_001' />
      <SessionsFeed />
      <SessionsSponsor
        sponsor={{
          backgroundImage: pageData.sessions.sessions.sponsorBackgroundImage.sourceUrl,
          buttonText: pageData.sessions.sessions.sponsorButtonText,
          sponsorContent: pageData.sessions.sessions.sponsorContent,
          sponsorLink: pageData.sessions.sessions.sponsorLink,
          logo: pageData.sessions.sessions.sponsorLogoAlt.sourceUrl,
        }}
      />
    </PageLayout>
  )
}

export default SessionsPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const pageData = await client.query(sessionsQuery)
  const sessionFeature = await client.query(sessionsFeatureQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      featuredArticle: sessionFeature.data,
      pageData: pageData.data.page,
    },
  }
}
