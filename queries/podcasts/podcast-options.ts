import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from '@queries/fragments/media'
import type { Podcast } from '@queries/fragments/podcastContent'
import { podcastContent } from '@queries/fragments/podcastContent'

disableFragmentWarnings()

export interface PodcastOptions {
  overviewDescription: string
  producer: string
  host: {
    name: string
    user: {
      moreInfo: {
        role: string
        profileImage: FeaturedImage
      }
    }
  }
  featured: {
    featured: Podcast[]
    hero: Podcast[]
  }
}

export const podcastOptionsQuery = {
  query: gql`
    ${podcastContent}
    query podcastOptionsQuery {
      podcastOptions {
        podcastOptions {
          podcastGlobal {
            overviewDescription
            producer
            host {
              name
              user {
                moreInfo {
                  role
                  profileImage {
                    ${media()}
                  }
                }
              }
            }
            featured {
              featured {
                ... on Podcast {
                  ...PodcastContent
                }
              }
              hero {
                ... on Podcast {
                  ...PodcastContent
                }
              }
            }
          }
        }
      }
    }
  `,
}
