import { gql } from '@apollo/client'

export interface Post {
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

export const postContent = gql`
  fragment PostContent on Post {
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
