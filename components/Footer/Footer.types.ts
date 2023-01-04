import { MenuItems } from '@typings/MenuItems.types'

export interface NavigationProps {
  data: {
    primaryMenu: {
      menuItems: {
        nodes: MenuItems[]
      }
    }
    secondaryMenu: {
      menuItems: {
        nodes: MenuItems[]
      }
    }
    legalMenu: {
      menuItems: {
        nodes: MenuItems[]
      }
    }
  }
}
