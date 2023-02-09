import { gql } from '@apollo/client'

export const subscriptionProductsQuery = {
  query: gql`
    query subscriptionProducts {
      products(where: {type: SUBSCRIPTION, orderby: {field: REGULAR_PRICE, order: ASC}}) {
        nodes {
          ... on SubscriptionProduct {
            databaseId
            name
            regularPrice(format: RAW)
            salePrice(format: RAW)
            signUpFee
            subscriptionPeriod: price(context: DEFAULT, exclude: [SIGN_UP_FEE,SUBSCRIPTION_LENGTH,SUBSCRIPTION_PRICE,TRAIL_LENGTH])
            subscriptionPrice: price(context: DEFAULT, exclude: [SIGN_UP_FEE,SUBSCRIPTION_LENGTH,SUBSCRIPTION_PERIOD,TRAIL_LENGTH])
            shippingClassId
          }
        }
      }
    }
  `,
}
