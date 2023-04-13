import type { FeaturedImage } from '@typings/FeaturedImage.types'

export interface GiftGridProps {
  gifts: {
    title: string
    featuredImage: {
      node: FeaturedImage
    }
    gift: {
      giftBrand: string
      giftLink: string
      giftPrice: number
    }
  }[]
}
