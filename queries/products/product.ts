import { gql } from '@apollo/client'

import { media } from '@queries/fragments/media'

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
                ${media()}
              }
            }
          }
          ... on SubscriptionProduct {
            databaseId
            name
            regularPrice(format: RAW)
            salePrice(format: RAW)
            signUpFee
            subscriptionPeriod: price(context: DEFAULT, exclude: [SIGN_UP_FEE,SUBSCRIPTION_LENGTH,SUBSCRIPTION_PRICE,TRAIL_LENGTH])
            subscriptionPrice: price(context: DEFAULT, exclude: [SIGN_UP_FEE,SUBSCRIPTION_LENGTH,SUBSCRIPTION_PERIOD,TRAIL_LENGTH])
          }
        }
      }
    `,
  }
}
