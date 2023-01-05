import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import { houseNoteContent } from '@queries/fragments/houseNoteContent'

disableFragmentWarnings()

export const houseNotesQuery = {
  query: gql`
    ${houseNoteContent}
    query HouseNotesQuery {
      page(id: "387159", idType: DATABASE_ID) {
        title
        additionalPageData {
          alternateTitle
          subtitleText
        }
        houseNotes {
          houseNotesOverheardColumn {
            ... on HouseNote {
              ... HouseNoteContent
            }
          }
          houseNotesPodcastColumn {
            ... on HouseNote {
              ... HouseNoteContent
            }
          }
          houseNotesWatchColumn {
            ... on HouseNote {
              ... HouseNoteContent
            }
          }
          houseNotesScrollColumn {
            ... on HouseNote {
              ... HouseNoteContent
            }
          }
          houseNotesReadColumn {
            ... on HouseNote {
              ... HouseNoteContent
            }
          }
          houseNotesQuoteColumn {
            ... on HouseNote {
              ... HouseNoteContent
            }
          }
        }   
      }
    }
  `
}