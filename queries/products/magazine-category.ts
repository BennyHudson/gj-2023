import { gql } from '@apollo/client'

export const magazineCategoryQuery = (count = 500) => {
  return {
    query: gql`
      query magazineCategoryQuery {
        productCategory(id: "magazine", idType: SLUG) {
          name
          products(first: ${count}) {
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
    `,
  }
}
