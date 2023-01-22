export interface GiftGridProps {
  gifts: {
    title: string
    featuredImage: {
      node: {
        sourceUrl: string
      }
    }
    gift: {
      giftBrand: string
      giftLink: string
      giftPrice: number
    }
  }[]
}
