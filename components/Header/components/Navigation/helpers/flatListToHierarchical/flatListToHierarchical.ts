import { MenuItems } from '@typings/MenuItems.types'

const flatListToHierarchical = (
  data: MenuItems[] = [],
  {
    idKey = 'key',
    parentKey = 'parentId',
    childrenKey = 'children'
  } = {}
): MenuItems[] => {
  const tree: MenuItems[] = []
  const childrenOf = {}
  data.forEach((item) => {
    const newItem = {...item}
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    parentId
      ? (
        childrenOf[parentId] = childrenOf[parentId] || []
      ).push(newItem)
      : tree.push(newItem)
  })
  return tree
}

export default flatListToHierarchical