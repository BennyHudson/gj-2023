export interface CodeSnippetBlock {
  [P: string]: {
    adCode: string
    fieldGroupName: string
  }
}

export const codeSnippetBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_CodeSnippet {
    adCode
    fieldGroupName
  }`
}
