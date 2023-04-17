export interface HeadingBlock {
  heading: string
  pull: string
  selectHeadingType: string
  fieldGroupName: string
}

export const headingBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_Heading {
    heading
    pull
    selectHeadingType
    fieldGroupName
  }`
}
