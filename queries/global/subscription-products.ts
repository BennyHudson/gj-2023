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
            price(context: RAW)
            onSale
            salePrice(format: RAW)
          }
        }
      }
    }
  `,
}
