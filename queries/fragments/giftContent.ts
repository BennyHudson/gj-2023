import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from './media'

export interface Gift {
  title: string
  gift: {
    giftLink: string
    giftPrice: string
    giftBrand: string
  }
  featuredImage?: {
    node: FeaturedImage
  }
}

export const giftContent = gql`
  fragment GiftContent on Gift {
    title
    gift {
      giftLink
      giftPrice
      giftBrand
    }
    featuredImage {
      node {
        ${media()}
      }
    }
  }
`
