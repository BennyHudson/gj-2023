import type { Image } from '@typings/FeaturedImage.types'

import { media } from '../media'

export interface ImageGalleryBlock {
  [P: string]: {
    fieldGroupName: string
    type: string
    gallery: Image[]
  }
}

export const imageGalleryBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_ImageGallery {
    fieldGroupName
    type
    gallery {
      ${media()}
      caption
    }
  }`
}
