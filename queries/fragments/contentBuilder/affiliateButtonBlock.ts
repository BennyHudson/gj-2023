export interface AffiliateButtonBlock {
  [P: string]: {
    fieldGroupName: string
    text: string
    url: string
  }
}

export const affiliateButtonBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_AffiliateButton {
    fieldGroupName
    text
    url
  }`
}
