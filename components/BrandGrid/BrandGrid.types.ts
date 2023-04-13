import type { FeaturedImage } from '@typings/FeaturedImage.types'

export interface BrandGridProps {
  brands: {
    name: string
    image: FeaturedImage
    link: string
  }[]
}
