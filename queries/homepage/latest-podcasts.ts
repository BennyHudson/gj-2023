import { gql } from '@apollo/client'

import { podcastContent } from '@queries/fragments/podcastContent'

export const latestPodcastsQuery = {
  query: gql`
    ${podcastContent}
    query latestPodcastsQuery {
      podcasts(first: 5) {
        nodes {
          ... PodcastContent
        }
      }
    }
  `
}