export interface VideoBlock {
  [P: string]: {
    fieldGroupName: string
    videoEmbed: string
    videoThumb?: {
      sourceUrl: string
    }
  }
}

export const videoBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_VideoEmbed {
    fieldGroupName
    videoEmbed
    videoThumb {
      sourceUrl
    }
  }`
}
