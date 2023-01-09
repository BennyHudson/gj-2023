export interface AffiliateProductBlock {
  [P: string]: {
    fieldGroupName: string
    affiliateProducts: {
      urlButtonText: string
      title: string
      text: string
      price: string
      affiliateLink: string
      image: {
        caption?: string
        sourceUrl: string
      }
    }[]
  }
}

export const affiliateProductBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_AffiliateProducts {
    fieldGroupName
    affiliateProducts {
      urlButtonText
      title
      text
      price
      affiliateLink
      image {
        caption
        sourceUrl
      }
    }
  }`
}