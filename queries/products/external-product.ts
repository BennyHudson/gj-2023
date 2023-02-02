import { gql } from '@apollo/client'
import { seo } from '@queries/fragments/seo'

export const magazineQuery = (slug: string) => {
  return {
    query: gql`
      query magazineQuery {
        externalProduct(id: "${slug}", idType: SLUG) {
          additionalIssueContent {
            issueCoverStar
            shortDescription
          }
          name
          shortDescription
          image {
            sourceUrl
          }
          ${seo()}
        }
      }
    `
  }
}