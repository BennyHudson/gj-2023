export interface ParagraphBlock {
  fieldGroupName: string
  paragraph: string
  pull: string
}

export const paragraphBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_Paragraph {
    fieldGroupName
    paragraph
    pull
  }`
}
