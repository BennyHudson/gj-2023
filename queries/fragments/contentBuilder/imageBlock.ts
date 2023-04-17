import type { Image } from '@typings/FeaturedImage.types'

import { media } from '../media'

export interface ImageBlock {
  fieldGroupName: string
  image: Image
  hasLink: boolean
  imageSize: 'standard' | 'standard--tall' | 'standard--full'
  internalExternal?: string
  externalLink?: string
  internalLink?: {
    [P: string]: {
      uri: string
    }
  }
}

export const imageBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_Image {
    fieldGroupName
    image {
      ${media()}
      caption
    }
    hasLink
    imageSize
    internalExternal
    externalLink
    internalLink {
      ... on Article {
        id
        uri
      }
      ... on Post {
        id
        uri
      }
      ... on Page {
        id
        uri
      }
    }
  }`
}
