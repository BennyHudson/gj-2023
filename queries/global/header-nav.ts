import { gql } from "@apollo/client"

export const headerNav = {
  query: gql`
    query mainMenu {
      menu(id: "dGVybTo5NjE3") {
        menuItems {
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

