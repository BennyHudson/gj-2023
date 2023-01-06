import { gql } from '@apollo/client'

export const articleContent = gql`
  fragment ArticleContent on Article {
    id
    title
    date
    uri
    databaseId
    featuredImage {
      node {
        sourceUrl
      }
    }
    categories {
      nodes {
        name
      }
    }
    articleAcf {
      standfirst
    }
  }
`