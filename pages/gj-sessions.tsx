import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import BannerAdvert from '@components/BannerAdvert'
import PageLayout from '@components/PageLayout'
import SessionsFeed from '@components/SessionsFeed'
import SessionsHeader from '@components/SessionsHeader'
import SessionsSponsor from '@components/SessionsSponsor'
import Thumbnail from '@components/Thumbnail'
import TitleAndIntro from '@components/TitleAndIntro'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import client from '@lib/apollo-client'


import type { Article } from '@queries/fragments/articleContent'
import type { Post } from '@queries/fragments/postContent'
import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import { sessionsFeatureQuery } from '@queries/homepage/sessions-feature'
import type { Sessions } from '@queries/pages/sessions'
import { sessionsQuery } from '@queries/pages/sessions'
import type { PageData } from '@typings/PageData.types'

interface SessionsPageProps extends PageData {
  featuredArticle: {
    articles: {
      nodes: Post[] | Article[]
    }
  }
  pageData: Sessions
}

const SessionsPage: FC<SessionsPageProps> = ({
  pageData,
  featuredArticle,
  headerNav,
  footerNav,
  siteOptions,
}: SessionsPageProps): ReactElement => {
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
          backgroundImage: pageData.sessions.sessions.sponsorBackgroundImage.fullSize,
          buttonText: pageData.sessions.sessions.sponsorButtonText,
          sponsorContent: pageData.sessions.sessions.sponsorContent,
          sponsorLink: pageData.sessions.sessions.sponsorLink,
          logo: pageData.sessions.sessions.sponsorLogoAlt.medium,
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
