import { gql } from '@apollo/client'

import { categorySeo } from '@queries/fragments/categorySeo'
import { Seo } from '@queries/fragments/seo'

export interface CategoryBody {
  name: string
  description: string
  uri: string
  taxonomyName: string
  slug: string
  seo: Seo
  children: {
    nodes: {
      name: string
      uri: string
    }[]
  }
}

export const categoryBodyQuery = (slug: string) => {
  return {
    query: gql`
      query articleCategoryQuery {
        category(id: "${slug}", idType: SLUG) {
          databaseId
          name
          description
          uri
          taxonomyName
          slug
          ${categorySeo()}
          children {
            nodes {
              name
              uri
            }
          }
        }
      }
    `,
  }
}
