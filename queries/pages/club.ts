import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from '@queries/fragments/media'
import type { Seo } from '@queries/fragments/seo'
import { seo } from '@queries/fragments/seo'

export interface ClubPageData {
  title: string
  databaseId: number
  featuredImage: {
    node: FeaturedImage
  }
  subscriptionPage: {
    club: {
      description: string
      clubhouseOffer?: string
      subscriptionPerks: {
        backgroundImage: FeaturedImage
        backgroundImageMobile: FeaturedImage
        content: string
        hasLink: boolean
        link: {
          title: string
          url: string
        }
        textAlignement: 'Right' | 'Left'
        textColor: 'Light' | 'Dark'
        title: string
      }[]
      video: {
        url: string
        title: string
        subtitle: string
      }
    }
  }
  seo: Seo
}

export const clubQuery = {
  query: gql`
    query clubQuery {
      product(id: "193031", idType: DATABASE_ID) {
        ... on SubscriptionProduct {
          subscriptionPerks {
            subscriptionPerks {
              subscriptionPerk
            }
          }
        }
      }
      page(id: "74300", idType: DATABASE_ID) {
        title
        databaseId
        featuredImage {
          node {
            ${media()}
          }
        }
        subscriptionPage {
          club {
            description
            clubhouseOffer
            subscriptionPerks {
              backgroundImage {
                ${media()}
              }
              backgroundImageMobile {
                ${media()}
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
            video {
              url
              title
              subtitle
            }
          }
        }
        ${seo()}
      }
    }
  `,
}
