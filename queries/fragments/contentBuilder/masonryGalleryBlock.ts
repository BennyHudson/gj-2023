export interface MasonryGalleryBlock {
  fieldGroupName: string
  gallery: {
    caption?: string
    sourceUrl: string
  }
}

export const masonryGalleryBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_MasonryGallery {
    fieldGroupName
    gallery {
      caption
      sourceUrl
    }
  }`
}
