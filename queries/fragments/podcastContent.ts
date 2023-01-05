import { gql } from '@apollo/client'

export const podcastContent = gql`
  fragment PodcastContent on Podcast {
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
        media {
          audio
        }
      }
    }
  }
`