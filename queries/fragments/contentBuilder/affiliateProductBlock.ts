import type { Image } from '@typings/FeaturedImage.types'

import { media } from '../media'

export interface AffiliateProduct {
  urlButtonText: string
  title: string
  text: string
  price: string
  affiliateLink: string
  image: Image
}

export interface AffiliateProductBlock {
  [P: string]: {
    fieldGroupName: string
    affiliateProducts: AffiliateProduct[]
  }
}

export const affiliateProductBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_AffiliateProducts {
    fieldGroupName
    affiliateProducts {
      urlButtonText
      title
      text
      price
      affiliateLink
      image {
        caption
        ${media()}
      }
    }
  }`
}
