export interface RecommendedProductsBlock {
  [P: string]: {
    fieldGroupName: string
    recommendedProducts: {
      id: string
      name: string
    }[]
  }
}

export const recommendedProductsBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_RecommendedProducts {
    fieldGroupName
    recommendedProducts {
      ... on SubscriptionProduct {
        id
        name
      }
    }
  }`
}
