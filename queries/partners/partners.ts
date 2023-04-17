import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from '@queries/fragments/media'

export interface Partner {
  title: string
  date: string
  featuredImage: {
    node: FeaturedImage
  }
  clubhousePartners: {
    partnerInformation: {
      website: string
      termsOfUse: string
      redeem: string
      offer: string
      logo: FeaturedImage
      featured: boolean
      address: {
        city: string
        country: string
        countryShort: string
        postCode: string
        state: string
        streetAddress: string
        streetName: string
        streetNumber: string
      }
    }
  }
}

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
