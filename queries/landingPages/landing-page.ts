import { gql } from '@apollo/client'

export const landingPageContentQuery = (slug: string, preview: boolean) => {
  const slugIsNumber = Boolean(slug.match(/^[0-9]*$/))
  return {
    query: gql`
      query landingPageContentQuery {
        landingPage(id: "${slug}", idType: ${slugIsNumber ? 'DATABASE_ID' : 'SLUG'}, asPreview: ${preview}) {
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
