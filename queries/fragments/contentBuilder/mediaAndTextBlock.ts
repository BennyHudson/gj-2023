export interface MediaAndTextBlock {
  [P: string]: {
    alignment: string
    fieldGroupName: string
    gallery: {
      caption?: string
      sourceUrl: string
    }[]
  }
}

export const mediaAndTextBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_MediaAndText {
    alignment
    fieldGroupName
    gallery {
      caption
      sourceUrl
    }
  }`
}
