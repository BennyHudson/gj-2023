import { gql } from '@apollo/client'

export const latestPodcastsQuery = {
  query: gql`
    query latestPodcastsQuery($after: String) {
      podcasts(first: 10, after: $after) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            uri
            databaseId
            title
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            podcasts {
              podcastMeta {
                guest {
                  name
                  about
                }
              }
            }
          }
        }
      }
    }
  `
}