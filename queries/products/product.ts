import { gql } from '@apollo/client'

export const productQuery = (productId: number) => {
  return {
    query: gql`
      query productQuery {
        product(id: "${productId}", idType: DATABASE_ID) {
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
          ... on SubscriptionProduct {
            databaseId
            name
            regularPrice(format: RAW)
            signUpFee
            price(context: RAW)
            onSale
            salePrice(format: RAW)
          }
        }
      }
    `
  }
}