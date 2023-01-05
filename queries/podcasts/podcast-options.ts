import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import { podcastContent } from '@queries/fragments/podcastContent'

disableFragmentWarnings()

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
                 ... PodcastContent
                }
              }
              hero {
                ... on Podcast {
                  ... PodcastContent
                }
              }
            }
          }
        }
      }
    }
  `
}