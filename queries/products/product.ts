import { gql } from '@apollo/client'
import { seo } from '@queries/fragments/seo'

export const productQuery = (slug: string) => {
  return {
    query: gql`
      query productQuery {
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