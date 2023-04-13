import type { Image } from '@typings/FeaturedImage.types'

import { media } from '../media'

export interface MasonryGalleryBlock {
  fieldGroupName: string
  gallery: Image[]
}

export const masonryGalleryBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_MasonryGallery {
    fieldGroupName
    gallery {
      caption
      ${media()}
    }
  }`
}
