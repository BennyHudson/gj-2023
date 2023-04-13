import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from './media'

export interface HouseNote {
  title: string
  uri: string
  articleType: {
    articleType: string
    articleTypeLandingPageExcerpt: string
  }
  featuredImage: {
    node: FeaturedImage
  }
  author: {
    node: {
      name: string
    }
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
