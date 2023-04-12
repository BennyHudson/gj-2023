import { gql } from '@apollo/client'

export const landingPageContentQuery = (slug: string, preview: boolean) => {
  return {
    query: gql`
      query landingPageContentQuery {
        landingPage(id: "${slug}", idType: ${preview ? 'DATABASE_ID' : 'SLUG'}, asPreview: ${preview}) {
          title
          databaseId
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
