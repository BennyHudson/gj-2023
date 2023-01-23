import { gql } from '@apollo/client'

export interface FooterNav {
  primaryMenu: {
    menuItems: {
      nodes: {
        key: string
        label: string
        uri: string
        parentId: string
      }[]
    }
  }
  secondaryMenu: {
    menuItems: {
      nodes: {
        key: string
        label: string
        uri: string
        parentId: string
      }[]
    }
  }
  legalMenu: {
    menuItems: {
      nodes: {
        key: string
        label: string
        uri: string
        parentId: string
      }[]
    }
  }
}

export const footerNavQuery = {
  query: gql`
    query footerMenus {
      primaryMenu: menu(id: "dGVybTo5NjE1") {
        menuItems(first: 1000) {
          nodes {
            key: id
            label
            uri
            parentId
          }
        }
      }
      secondaryMenu: menu(id: "dGVybTo5NjE3") {
        menuItems(first: 1000) {
          nodes {
            key: id
            label
            uri
            parentId
          }
        }
      }
      legalMenu: menu(id: "dGVybTo5NjEz") {
        menuItems(first: 1000) {
          nodes {
            key: id
            label
            uri
            parentId
          }
        }
      }
    }
  `,
}
