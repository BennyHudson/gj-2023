import { gql } from '@apollo/client'

export const subscriptionProductsQuery = {
  query: gql`
    query subscriptionProducts {
      products(where: { type: SUBSCRIPTION }) {
        nodes {
          ... on SubscriptionProduct {
            databaseId
            name
            regularPrice(format: RAW)
            signUpFee
            subscriptionPeriod: price(context: DEFAULT, exclude: [SIGN_UP_FEE,SUBSCRIPTION_LENGTH,SUBSCRIPTION_PRICE,TRAIL_LENGTH])
            subscriptionPrice: price(context: DEFAULT, exclude: [SIGN_UP_FEE,SUBSCRIPTION_LENGTH,SUBSCRIPTION_PERIOD,TRAIL_LENGTH])
          }
        }
      }
    }
  `,
}
