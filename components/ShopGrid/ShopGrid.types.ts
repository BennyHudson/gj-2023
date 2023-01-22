export interface ShopGridProps {
  products: {
    name: string
    link: string
    featured: {
      sourceUrl: string
    }
  }[]
}
