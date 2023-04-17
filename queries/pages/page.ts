import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from '@queries/fragments/media'
import type { Seo } from '@queries/fragments/seo'
import { seo } from '@queries/fragments/seo'

export interface Page {
  title: string
  uri: string
  id: number
  content: string
  seo: Seo
  featuredImage: {
    node: FeaturedImage
  }
  additionalPageData: {
    subtitleText: string
  }
  membersOfStaff?: {
    staffEditors: {
      name: string
      position: string
    }[]
    staffMembers: {
      name: string
      position: string
    }[]
  }
  careers?: {
    careers: {
      jobs: {
        jobSpec: {
          id: number
          mediaItemUrl: string
        }
        position: string
        shortDescription: string
      }[]
    }
  }
  contactInfo?: {
    contactInfo: {
      title: string
      info: string
    }[]
    officeMap: {
      city: string
      country: string
      countryShort: string
      latitude: number
      longitude: number
      placeId: string
      postCode: string
      state: string
      stateShort: string
      streetAddress: string
      streetName: string
      streetNumber: string
      zoom: string
    }
  }
}

export const pageQuery = (pageId: number) => {
  return {
    query: gql`
      query pageQuery {
        page(id: "${pageId}", idType: DATABASE_ID) {
          title
          uri
          id
          content
          ${seo()}
          featuredImage {
            node {
              ${media()}
            }
          }
          additionalPageData {
            subtitleText
          }
          membersOfStaff {
            staffEditors {
              name
              position
            }
            staffMembers {
              name
              position
            }
          }
          careers {
            careers {
              jobs {
                jobSpec {
                  id
                  mediaItemUrl
                }
                position
                shortDescription
              }
            }
          }
          contactInfo {
            contactInfo {
              title
              info
            }
            officeMap {
              city
              country
              countryShort
              latitude
              longitude
              placeId
              postCode
              state
              stateShort
              streetAddress
              streetName
              streetNumber
              zoom
            }
          }
        }
      }
    `,
  }
}
