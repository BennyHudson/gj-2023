import type { FeaturedImage } from './FeaturedImage.types'

export interface Post {
  id: string
  title: string
  excerpt?: string
  uri: string
  date: string
  categories?: {
    nodes: {
      name: string
      uri: string
    }[]
  }
  databaseId: number
  featuredImage: {
    node: FeaturedImage
  }
  contentType: {
    node: {
      graphqlPluralName: string
    }
  }
  author?: {
    node: {
      name: string
    }
  }
  byLineAdditional?: {
    photographerName?: string
    otherByLines?: {
      content: string
      title: string
    }
  }
  articleAcf?: {
    standfirst?: string
    featuredMedia?: string
    featuredVideo?: string
  }
}
