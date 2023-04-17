/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { MenuItems } from '@typings/MenuItems.types'

import type { FooterNav } from '@queries/global/footer-nav'
import type { HeaderNav } from '@queries/global/header-nav'

type HeaderNavProps = HeaderNav['menu']['menuItems']['nodes']
type FooterNavProps = FooterNav['primaryMenu']['menuItems']['nodes']
type LegalNavProps = FooterNav['legalMenu']['menuItems']['nodes']
type SecondaryFooterNavProps = FooterNav['primaryMenu']['menuItems']['nodes']

export type Menu = HeaderNavProps | FooterNavProps | LegalNavProps | SecondaryFooterNavProps

const flatListToHierarchical = (data: Menu = [], { idKey = 'key', parentKey = 'parentId', childrenKey = 'children' } = {}): MenuItems[] => {
  const tree: MenuItems[] = []
  const childrenOf = {}
  data.forEach((item) => {
    const newItem = { ...item }
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem) : tree.push(newItem)
  })
  return tree
}

export default flatListToHierarchical
