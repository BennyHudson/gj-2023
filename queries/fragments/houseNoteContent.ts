import { gql } from '@apollo/client'

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