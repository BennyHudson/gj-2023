import { gql } from '@apollo/client'

export const landingPageContentQuery = (slug: string, preview: boolean) => {
  const slugIsString = isNaN(parseInt(slug))
  return {
    query: gql`
      query landingPageContentQuery {
        landingPage(id: "${slug}", idType: ${slugIsString ? 'SLUG' : 'DATABASE_ID'}, asPreview: ${preview}) {
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
