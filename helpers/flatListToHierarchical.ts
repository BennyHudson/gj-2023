import { MenuItems, RawMenu } from '@typings/MenuItems.types'

const flatListToHierarchical = (
  data: RawMenu[] = [],
): MenuItems[] => {
  const tree: MenuItems[] = []

  // data.forEach((menuItem) => {
  //   if (!menuItem.parentId) {
  //     tree.push({
  //       id: menuItem.key,
  //       uri: menuItem.uri,
  //       label: menuItem.label,
  //       children: []
  //     })
  //     return
  //   }
  //   const parentItem = tree.find((parent) => parent.id === menuItem.parentId)
  //   parentItem && parentItem.children!.push({
  //     id: menuItem.key,
  //     uri: menuItem.uri,
  //     label: menuItem.label,
  //     children: [],
  //   })
  // })

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