import { gql } from "@apollo/client";

export const partnerQuery = {
  query: gql`
    query partnerQuery {
      partners(first: 500) {
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
  `
}