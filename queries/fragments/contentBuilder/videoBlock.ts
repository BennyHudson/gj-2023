import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from '../media'

export interface VideoBlock {
  [P: string]: {
    fieldGroupName: string
    videoEmbed: string
    videoThumb?: FeaturedImage
  }
}

export const videoBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_VideoEmbed {
    fieldGroupName
    videoEmbed
    videoThumb {
      ${media()}
    }
  }`
}
