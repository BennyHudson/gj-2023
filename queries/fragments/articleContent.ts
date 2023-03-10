import { gql } from '@apollo/client'

export interface Article {
  id: string
  title: string
  date: string
  uri: string
  databaseId: number
  featuredImage?: {
    node: {
      sourceUrl: string
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
        sourceUrl
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
