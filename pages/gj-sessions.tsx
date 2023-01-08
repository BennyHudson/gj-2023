import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'
import { gql } from '@apollo/client'

import { sessionsFeatureQuery } from '@queries/homepage/sessions-feature'

import PageContext, { PageContextProps } from '@context/PageContext'

import TitleAndIntro from '@components/TitleAndIntro'
import Thumbnail from '@components/Thumbnail'
import Section from '@components/Section'
import SessionsHeader from '@components/SessionsHeader'
import BannerAdvert from '@components/BannerAdvert'
import SessionsFeed from '@components/SessionsFeed'

const SessionsPage: FC = ({ pageData, featuredArticle }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(7)
  }, [setActiveNavElement])

  console.log(featuredArticle)
  
  return (
    <>
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
    </>
  )
}

export default SessionsPage

export async function getStaticProps() {
  const pageData = await client.query({
    query: gql`
      query sessionsPage {
        page(id: 388179, idType: DATABASE_ID) {
          title
          sessions {
            sessions {
              sessionsIntroText
              sponsorBackgroundImage {
                sourceUrl
              }
              sponsorButtonText
              sponsorContent
              sponsorLink
              sponsorLogo {
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
      featuredArticle: sessionFeature.data,
      pageData: pageData.data.page,
    }
  }
}