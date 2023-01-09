export interface ListBlock {
  fieldGroupName: string
  listTitle: string
  list: {
    listItem: string
  }[]
}

export const listBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_List {
    fieldGroupName
    listTitle
    list {
      listItem
    }
  }`
}