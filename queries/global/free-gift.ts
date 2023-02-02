import { gql } from '@apollo/client'

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
                sourceUrl
              }
            }
          }
        }
      }
    }
  `,
}
