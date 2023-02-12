import { gql } from '@apollo/client'
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
        featuredImage {
          node {
            sourceUrl
          }
        }
        subscriptionPage {
          club {
            description
            clubhouseOffer
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