import React, { FC, ReactElement, useEffect, useContext } from 'react'

import PageContext, { PageContextProps } from '@context/PageContext'
import client from '@lib/apollo-client'
import { gql } from '@apollo/client'

import ClubOverview from '@components/ClubOverview'
import ClubAdverts from '@components/ClubAdverts'
import ClubGift from '@components/ClubGift'
import ClubBuy from '@components/ClubBuy'
import ClubPerks from '@components/ClubPerks'
import ClubHero from '@components/ClubHero'
import HeadTags from '@components/HeadTags'

const ClubPage: FC = ({ pageData }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(8)
  }, [setActiveNavElement])
  
  return (
    <>
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
    </>
  )
}

export default ClubPage

export async function getStaticProps() {
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
      pageData: clubPage.data.page,
    }
  }
}