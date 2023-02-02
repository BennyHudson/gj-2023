import { gql } from '@apollo/client'

export const landingPageContentQuery = (slug: string) => {
  return {
    query: gql`
      query landingPageContentQuery {
        landingPage(id: "${slug}", idType: SLUG) {
          title
          landingPageContent {
            redemptionTerms
            redemptionDetails
            subtitle
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    `
  }
}