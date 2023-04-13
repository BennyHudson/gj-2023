import type { FeaturedImage } from '@typings/FeaturedImage.types'

export interface ClubPerksProps {
  title?: string
  subtitle?: string
  perks: {
    textAlignement: 'Right' | 'Left'
    textColor: 'Light' | 'Dark'
    backgroundImage: FeaturedImage
    backgroundImageMobile: FeaturedImage
    title: string
    content: string
    hasLink: boolean
    link?: {
      title: string
      url: string
    }
  }[]
}
