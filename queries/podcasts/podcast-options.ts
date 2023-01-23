import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import { Podcast, podcastContent } from '@queries/fragments/podcastContent'

disableFragmentWarnings()

export interface PodcastOptions {
  overviewDescription: string
  producer: string
  host: {
    name: string
    user: {
      moreInfo: {
        role: string
        profileImage: {
          sourceUrl: string
        }
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
                    sourceUrl
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
