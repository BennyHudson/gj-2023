export interface ButtonInfoBlock {
  [P: string]: {
    callToAction: string
    fieldGroupName: string
    image: {
      caption?: string
      sourceUrl: string
    }
    link: string
    title: string
  }
}

export const buttonInfoBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_ButtonInfoBlock {
    callToAction
    fieldGroupName
    image {
      caption
      sourceUrl
    }
    link
    title
  }`
}
