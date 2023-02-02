import { gql } from '@apollo/client'

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
                sourceUrl
              }
            }
            clubhousePartners {
              partnerInformation {
                website
                termsOfUse
                redeem
                offer
                logo {
                  sourceUrl
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
