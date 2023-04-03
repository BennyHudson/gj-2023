import { gql } from '@apollo/client'

import { media } from './media'

export interface Article {
  id: string
  title: string
  date: string
  uri: string
  databaseId: number
  featuredImage?: {
    node: {
      fullSize: string
      postThumb: string
      squareThumb: string
    }
  }
  categories?: {
    nodes: {
      name: string
      uri: string
    }[]
  }
  articleAcf: {
    standfirst: string
  }
}

export const articleContent = gql`
  fragment ArticleContent on Article {
    id
    title
    date
    uri
    databaseId
    featuredImage {
      node {
        ${media()}
      }
    }
    categories {
      nodes {
        name
        uri
      }
    }
    articleAcf {
      standfirst
    }
  }
`
