import type { FeaturedImage } from './FeaturedImage.types'

export interface Product {
  name: string
  description: string
  stockQuantity?: string
  signUpFee: string
  regularPrice: string
  salePrice: string
  subscriptionPeriod: string
  subscriptionPrice: string
  databaseId: number
  featuredImage: {
    node: FeaturedImage
  }
}
