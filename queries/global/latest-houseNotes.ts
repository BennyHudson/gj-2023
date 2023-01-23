import { gql } from '@apollo/client'

import { houseNoteContent } from '@queries/fragments/houseNoteContent'

export const latestHouseNotesQuery = {
  query: gql`
    ${houseNoteContent}
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
            ...HouseNoteContent
          }
        }
      }
    }
  `,
}
