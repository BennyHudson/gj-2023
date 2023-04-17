import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import type { ContentBuilder } from './contentBuilder'
import { media } from './media'

export interface Article {
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
    contentBuilder: ContentBuilder[]
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
