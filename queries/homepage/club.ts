import { gql } from '@apollo/client'

import { media } from '@queries/fragments/media'

export const clubQuery = {
  query: gql`
    query clubQuery {
      page(id: "74300", idType: DATABASE_ID) {
        subscriptionPage {
          club {
            description
            card {
              ${media()}
            }
          }
        }
      }
    }
  `,
}
