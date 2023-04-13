import { gql } from '@apollo/client'

import { media } from '@queries/fragments/media'
import { seo } from '@queries/fragments/seo'

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
            clubhouseBrands {
              title
              logo {
                sourceUrl
              }
            }
          }
        }
        ${seo()}
      }
    }
  `,
}
