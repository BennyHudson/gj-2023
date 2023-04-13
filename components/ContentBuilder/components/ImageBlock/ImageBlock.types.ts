import type { Image } from '@typings/FeaturedImage.types'

export interface ImageBlockProps {
  image: Image
  imageSize: 'standard' | 'standard--tall' | 'standard--full'
}
