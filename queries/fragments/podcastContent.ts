import { gql } from '@apollo/client'

import { media } from './media'

export interface Podcast {
  uri: string
  databaseId: number
  title: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
  podcasts: {
    podcastMeta: {
      guest: {
        name: string
        about: string
      }
      media: {
        audio: string
      }
    }
  }
}

export const podcastContent = gql`
  fragment PodcastContent on Podcast {
    uri
    databaseId
    title
    date
    featuredImage {
      node {
        ${media()}
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
