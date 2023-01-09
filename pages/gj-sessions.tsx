import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'
import { gql } from '@apollo/client'

import { sessionsFeatureQuery } from '@queries/homepage/sessions-feature'

import PageContext, { PageContextProps } from '@context/PageContext'

import HeadTags from '@components/layout/HeadTags'
import TitleAndIntro from '@components/typography/TitleAndIntro'
import Thumbnail from '@components/imagery/Thumbnail'
import SessionsHeader from '@components/sessions/SessionsHeader'
import BannerAdvert from '@components/layout/BannerAdvert'
import SessionsFeed from '@components/grids/SessionsFeed'
import SessionsSponsor from '@components/sessions/SessionsSponsor'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import PageLayout from '@components/layout/PageLayout'

const SessionsPage: FC = ({ pageData, featuredArticle, headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(7)
  }, [setActiveNavElement])
  
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <HeadTags seo={pageData.seo} />
      <SessionsHeader>
        <TitleAndIntro title={pageData.title.toUpperCase()} intro={pageData.sessions.sessions.sessionsIntroText} inverse />
        <Thumbnail 
          showTitle
          featuredImage={featuredArticle.articles.nodes[0].featuredImage.node.sourceUrl} 
          to={featuredArticle.articles.nodes[0].uri}
          title={featuredArticle.articles.nodes[0].title}
          date={featuredArticle.articles.nodes[0].date}
          categories={featuredArticle.articles.nodes[0].categories}
        />
      </SessionsHeader>
      <BannerAdvert />
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
  const pageData = await client.query({
    query: gql`
      query sessionsPage {
        page(id: 388179, idType: DATABASE_ID) {
          title
          seo {
            breadcrumbs {
              text
              url
            }
            canonical
            cornerstone
            focuskw
            metaDesc
            metaKeywords
            metaRobotsNofollow
            metaRobotsNoindex
            opengraphAuthor
            opengraphDescription
            opengraphImage {
              sourceUrl
            }
            opengraphModifiedTime
            opengraphPublishedTime
            opengraphPublisher
            opengraphSiteName
            opengraphTitle
            opengraphType
            opengraphUrl
            readingTime
            schema {
              articleType
              pageType
            }
            title
            twitterDescription
            twitterImage {
              sourceUrl
            }
            twitterTitle
          }
          sessions {
            sessions {
              sessionsIntroText
              sponsorBackgroundImage {
                sourceUrl
              }
              sponsorButtonText
              sponsorContent
              sponsorLink
              sponsorLogoAlt {
                sourceUrl
              }
            }
          }
        }
      }
    `
  })
  const sessionFeature = await client.query(sessionsFeatureQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      featuredArticle: sessionFeature.data,
      pageData: pageData.data.page,
    }
  }
}