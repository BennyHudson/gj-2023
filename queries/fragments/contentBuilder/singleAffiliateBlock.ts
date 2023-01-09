export interface SingleAffiliatBlock {
  [P: string]: {
    description: string
    fieldGroupName: string
    link: string
    price: string
    title: string
    image: {
      caption?: string
      sourceUrl: string
    }
  }
}

export const singleAffiliateBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_SingleAffiliate {
    description
    fieldGroupName
    link
    price
    title
    image {
      caption
      sourceUrl
    }
  }`
}