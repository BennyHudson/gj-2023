export interface ImageGalleryBlock {
  [P: string]: {
    fieldGroupName: string
    type: string
    gallery: {
      sourceUrl: string
      caption?: string
    }[]
  }
}

export const imageGalleryBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_ImageGallery {
    fieldGroupName
    type
    gallery {
      sourceUrl
      caption
    }
  }`
}
