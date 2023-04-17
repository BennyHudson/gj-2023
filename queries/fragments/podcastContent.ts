import { gql } from '@apollo/client'

import type { Article } from './articleContent'
import { media } from './media'

export interface Podcast extends Article {
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
