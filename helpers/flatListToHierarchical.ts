import { FooterNav } from '@queries/global/footer-nav'
import { HeaderNav } from '@queries/global/header-nav'
import { MenuItems } from '@typings/MenuItems.types'

type HeaderNavProps = HeaderNav['menu']['menuItems']['nodes']
type FooterNavProps = FooterNav['primaryMenu']['menuItems']['nodes']
type LegalNavProps = FooterNav['legalMenu']['menuItems']['nodes']
type SecondaryFooterNavProps = FooterNav['primaryMenu']['menuItems']['nodes']

type Menu = HeaderNavProps | FooterNavProps | LegalNavProps | SecondaryFooterNavProps

const flatListToHierarchical = (
  data: Menu[] = [],
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