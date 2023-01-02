import { gql } from "@apollo/client";

export const latestPodcastsQuery = {
  query: gql`
    query latestPodcastsQuery {
      podcasts(first: 5) {
        nodes {
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
  `
}