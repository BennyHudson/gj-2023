import { gql } from '@apollo/client'

import { media } from '@queries/fragments/media'

export const magazineCategoryQuery = (count = 1) => {
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
                  ${media()}
                }
              }
            }
          }
        }
      }
    `,
  }
}
