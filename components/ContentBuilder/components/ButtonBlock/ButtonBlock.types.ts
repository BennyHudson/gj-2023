import type { Image } from '@typings/FeaturedImage.types'

export interface ButtonBlockProps {
  title: string
  callToAction?: string
  link: string
  price?: number
  image?: Image
}
