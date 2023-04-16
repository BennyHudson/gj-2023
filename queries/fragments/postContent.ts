import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from './media'

export interface Post {
  id: string
  title: string
  date: string
  uri: string
  databaseId: number
  featuredImage: {
    node: FeaturedImage
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
