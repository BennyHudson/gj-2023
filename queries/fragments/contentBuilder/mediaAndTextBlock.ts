import type { Image } from '@typings/FeaturedImage.types'

import { media } from '../media'

export interface MediaAndTextBlock {
  [P: string]: {
    alignment: string
    fieldGroupName: string
    gallery: Image[]
  }
}

export const mediaAndTextBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_MediaAndText {
    alignment
    fieldGroupName
    gallery {
      caption
      ${media()}
    }
  }`
}
