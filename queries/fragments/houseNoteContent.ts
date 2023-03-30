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
    databaseId
    articleType {
      articleType
      articleTypeLandingPageExcerpt
    }
    featuredImage {
      node {
        fullSize: sourceUrl
        postThumb: sourceUrl(size: POST_THUMB)
        squareThumb: sourceUrl(size: POST_SQUARE)
      }
    }
    author {
      node {
        name
      }
    }
  }
`
