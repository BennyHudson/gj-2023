import type { Seo } from '@queries/fragments/seo'

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
  data: {
    price: string
    shipping_class_id: number
    type: 'subscription' | 'product'
    meta_data: {
      key: string
      value: string
    }[]
  }
  seo: Seo
}
