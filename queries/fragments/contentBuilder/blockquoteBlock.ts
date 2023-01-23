export interface BlockQuoteBlock {
  [P: string]: {
    text: string
    fieldGroupName: string
  }
}

export const blockQuoteBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_Blockquote {
    text
    fieldGroupName
  }`
}
