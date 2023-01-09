import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'
import { gql } from '@apollo/client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/layout/PageLayout'
import HeadTags from '@components/layout/HeadTags'

import ClubOverview from '@components/club/ClubOverview'
import ClubAdverts from '@components/club/ClubAdverts'
import ClubGift from '@components/club/ClubGift'
import ClubBuy from '@components/club/ClubBuy'
import ClubPerks from '@components/club/ClubPerks'
import ClubHero from '@components/club/ClubHero'

import PageContext, { PageContextProps } from '@context/PageContext'

const ClubPage: FC = ({ pageData, headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(8)
  }, [setActiveNavElement])
  
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <HeadTags seo={pageData.seo} />
      <ClubHero 
        title={pageData.title} 
        subtitle={pageData.subscriptionPage.club.description}
        featuredImage={pageData.featuredImage.node.sourceUrl}
      />
      <ClubAdverts adverts={pageData.subscriptionPage.club.adImages} />
      <ClubOverview overview={pageData.subscriptionPage.club.subscriptionOverview} />
      <ClubGift />
      <ClubBuy />
      <ClubPerks perks={pageData.subscriptionPage.club.subscriptionPerks} />
      <ClubBuy />
    </PageLayout>
  )
}

export default ClubPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const clubPage = await client.query({
    query: gql`
      query clubQuery {
        page(id: "74300", idType: DATABASE_ID) {
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
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
          subscriptionPage {
            club {
              adImages {
                adImage {
                  sourceUrl
                }
              }
              subtitle
              description
              subscriptionOverview {
                item {
                  description
                  title
                }
              }
              subscriptionPerks {
                backgroundImage {
                  sourceUrl
                }
                content
                hasLink
                link {
                  title
                  url
                }
                textAlignement
                textColor
                title
              }
            }
          }
        }
      }
    `
  })

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      pageData: clubPage.data.page,
    }
  }
}