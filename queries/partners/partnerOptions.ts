import { gql } from '@apollo/client'

export const partnerOptionsQuery = {
  query: gql`
    query partnerOptionsQuery {
      clubhousePartnersOptions {
        clubhousePartnersOptions {
          clubhousePartnerArchive {
            featuredImage {
              sourceUrl
            }
            subTitle
          }
        }
      }
    }
  `,
}
