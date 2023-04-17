import { gql } from '@apollo/client'

import type { Article } from './articleContent'
import { media } from './media'

export interface HouseNote extends Article {
  author: {
    node: {
      name: string
    }
  }
  articleType: {
    articleType: string
    articleTypeLandingPageExcerpt: string
  }
}

export const houseNoteContent = gql`
  fragment HouseNoteContent on HouseNote {
    title
    uri
    databaseId
    articleType {
      articleType
      articleTypeLandingPageExcerpt
    }
    featuredImage {
      node {
        ${media()}
      }
    }
    author {
      node {
        name
      }
    }
  }
`
