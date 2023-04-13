import { gql } from '@apollo/client'

import { media } from '@queries/fragments/media'

export const partnerQuery = (count: number) => {
  return {
    query: gql`
      query partnerQuery {
        partners(first: ${count}) {
          nodes {
            title
            date
            featuredImage {
              node {
                ${media()}
              }
            }
            clubhousePartners {
              partnerInformation {
                website
                termsOfUse
                redeem
                offer
                logo {
                  ${media()}
                }
                featured
                address {
                  city
                  country
                  countryShort
                  postCode
                  state
                  streetAddress
                  streetName
                  streetNumber
                }
              }
            }
          }
        }
      }
    `,
  }
}
