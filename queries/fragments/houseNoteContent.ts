import { gql } from '@apollo/client'

export interface HouseNote {
  title: string
  uri: string
  articleType: {
    articleType: string
    articleTypeLandingPageExcerpt: string
  }
  featuredImage: {
    node: {
      sourceUrl: string
    }
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
    articleType {
      articleType
      articleTypeLandingPageExcerpt
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        name
      }
    }
  }
`