import type { Product } from '@typings/Product.types'

export interface ClubBuyProps {
  products: Product[]
  freeGift?: Product
  offerCode?: string
}
