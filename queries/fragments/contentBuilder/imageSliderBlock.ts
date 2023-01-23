export interface ImageSliderBlock {
  fieldGroupName: string
  slider: {
    caption?: string
    sourceUrl: string
  }[]
}

export const imageSliderBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_ImageSlider {
    fieldGroupName
    slider {
      caption
      sourceUrl
    }
  }`
}
