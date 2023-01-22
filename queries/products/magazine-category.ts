import { gql } from '@apollo/client'

export const magazineCategoryQuery = {
  query: gql`
    query magazineCategoryQuery {
      productCategory(id: "magazine", idType: SLUG) {
        name
        products(first: 500) {
          edges {
            node {
              slug
              name
              link
              image {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `
}