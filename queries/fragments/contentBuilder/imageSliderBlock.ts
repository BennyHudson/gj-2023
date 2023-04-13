import type { Image } from '@typings/FeaturedImage.types'

import { media } from '../media'

export interface ImageSliderBlock {
  fieldGroupName: string
  slider: Image[]
}

export const imageSliderBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_ImageSlider {
    fieldGroupName
    slider {
      caption
      ${media()}
    }
  }`
}
