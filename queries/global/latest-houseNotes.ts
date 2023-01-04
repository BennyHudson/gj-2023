import { gql } from '@apollo/client'

export const latestHouseNotesQuery = {
  query: gql`
    query latestHouseNotesQuery($after: String) {
      houseNotes(first: 12, after: $after) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            articleType {
              articleType
              articleTypeLandingPageExcerpt
            }
            title
            uri
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  `
}