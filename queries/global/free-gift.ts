import { gql } from '@apollo/client'

import { media } from '@queries/fragments/media'

export const freeGiftQuery = {
  query: gql`
    query freeGift {
      products(where: { category: "Free Gifts" }) {
        nodes {
          ... on SimpleProduct {
            name
            stockQuantity
            description
            databaseId
            featuredImage {
              node {
                ${media()}
              }
            }
          }
        }
      }
    }
  `,
}
