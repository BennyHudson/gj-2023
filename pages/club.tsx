import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'
import { gql } from '@apollo/client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/PageLayout'
import HeadTags from '@components/HeadTags'

import ClubOverview from '@components/ClubOverview'
import ClubAdverts from '@components/ClubAdverts'
import ClubGift from '@components/ClubGift'
import ClubBuy from '@components/ClubBuy'
import ClubPerks from '@components/ClubPerks'
import ClubHero from '@components/ClubHero'

import PageContext, { PageContextProps } from '@context/PageContext'
import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import { freeGiftQuery } from '@queries/global/free-gift'

const ClubPage: FC = ({ pageData, headerNav, footerNav, subscriptionProducts, freeGift }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(8)
  }, [setActiveNavElement])
  
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={pageData.seo}>
      <ClubHero 
        title={pageData.title} 
        subtitle={pageData.subscriptionPage.club.description}
        featuredImage={pageData.featuredImage.node.sourceUrl}
      />
      <ClubAdverts adverts={pageData.subscriptionPage.club.adImages} />
      <ClubOverview overview={pageData.subscriptionPage.club.subscriptionOverview} />
      <ClubGift freeGift={freeGift} />
      <ClubBuy products={subscriptionProducts} freeGift={freeGift} />
      <ClubPerks perks={pageData.subscriptionPage.club.subscriptionPerks} />
      <ClubBuy products={subscriptionProducts} />
    </PageLayout>
  )
}

export default ClubPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const subscriptionProducts = await client.query(subscriptionProductsQuery)
  const freeGift = await client.query(freeGiftQuery)
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
      subscriptionProducts: subscriptionProducts.data.products.nodes,
      freeGift: freeGift.data.products.nodes[0],
    }
  }
}