import { gql } from '@apollo/client'

import { media } from '@queries/fragments/media'

export const featuredProductsQuery = {
  query: gql`
    query featuredProductsQuery {
      clubhousePartnersOptions {
        store {
          store {
            brands {
              featured {
                ${media()}
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
