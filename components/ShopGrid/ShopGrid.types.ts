import type { FeaturedImage } from '@typings/FeaturedImage.types'

export interface ShopGridProps {
  products: {
    name: string
    link: string
    featured: FeaturedImage
  }[]
}
