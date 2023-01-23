import { gql } from '@apollo/client'

export const featuredProductsQuery = {
  query: gql`
    query featuredProductsQuery {
      clubhousePartnersOptions {
        store {
          store {
            brands {
              featured {
                sourceUrl
              }
              name
              link
            }
          }
        }
      }
    }
  `,
}
