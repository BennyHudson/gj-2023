import { gql } from '@apollo/client'

import { media } from '@queries/fragments/media'

export const partnerOptionsQuery = {
  query: gql`
    query partnerOptionsQuery {
      clubhousePartnersOptions {
        clubhousePartnersOptions {
          clubhousePartnerArchive {
            featuredImage {
              ${media()}
            }
            subTitle
          }
        }
      }
    }
  `,
}
