import { gql } from '@apollo/client'

import { media } from '@queries/fragments/media'

export const page404Query = {
  query: gql`
    query page404Query {
      gjOptions {
        error404 {
          errorBackgroundImage {
            ${media()}
          }
        }
      }
    }
  `,
}
