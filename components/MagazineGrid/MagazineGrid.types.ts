import type { FeaturedImage } from '@typings/FeaturedImage.types'

export interface MagazineGridProps {
  magazines: {
    node: {
      name: string
      slug: string
      image: FeaturedImage
    }
  }[]
}
