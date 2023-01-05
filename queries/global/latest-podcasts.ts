import { gql } from '@apollo/client'

import { podcastContent } from '@queries/fragments/podcastContent'

export const latestPodcastsQuery = {
  query: gql`
    ${podcastContent}
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
            ...PodcastContent
          }
        }
      }
    }
  `
}