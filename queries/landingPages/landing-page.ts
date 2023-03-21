import { gql } from '@apollo/client'

export const landingPageContentQuery = (slug: string, preview: boolean) => {
  return {
    query: gql`
      query landingPageContentQuery {
        landingPage(id: "${slug}", idType: SLUG, asPreview: ${preview}) {
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
    `,
  }
}
