import type { Image } from '@typings/FeaturedImage.types'

import { media } from '../media'

export interface SingleAffiliateBlock {
  [P: string]: {
    description: string
    fieldGroupName: string
    link: string
    price: string
    title: string
    image: Image
  }
}

export const singleAffiliateBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_SingleAffiliate {
    description
    fieldGroupName
    link
    price
    title
    image {
      caption
      ${media()}
    }
  }`
}
