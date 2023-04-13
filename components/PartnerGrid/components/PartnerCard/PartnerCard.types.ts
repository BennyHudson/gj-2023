import type { FeaturedImage } from '@typings/FeaturedImage.types'

export interface PartnerCardProps {
  featuredImage: {
    node: FeaturedImage
  }
  title: string
  clubhousePartners: {
    partnerInformation: {
      website: string
      offer: string
      redeem: string
      termsOfUse: string
    }
  }
  date: string
}
