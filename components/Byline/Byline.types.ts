import type { FeaturedImage } from '@typings/FeaturedImage.types'

export interface BylineProps {
  author: string
  photographer?: string
  additionalBylines?: {
    title: string
    content: string
  }[]
  sponsoredPost?: {
    sponsorLogo: FeaturedImage
    sponsorDisableLink: boolean
    sponsorName: string
    sponsorUrl: string
  }
}
