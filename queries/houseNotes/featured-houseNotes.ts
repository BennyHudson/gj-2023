import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import { houseNoteContent } from '@queries/fragments/houseNoteContent'
import { media } from '@queries/fragments/media'

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
              ...HouseNoteContent
            }
          }
          houseNotesPodcastColumn {
            ... on HouseNote {
              ...HouseNoteContent
            }
          }
          houseNotesWatchColumn {
            ... on HouseNote {
              ...HouseNoteContent
            }
          }
          houseNotesScrollColumn {
            ... on HouseNote {
              ...HouseNoteContent
            }
          }
          houseNotesReadColumn {
            ... on HouseNote {
              ...HouseNoteContent
            }
          }
          houseNotesQuoteColumn {
            ... on HouseNote {
              ...HouseNoteContent
            }
          }
        }
        seo {
          breadcrumbs {
            text
            url
          }
          canonical
          cornerstone
          focuskw
          metaDesc
          metaKeywords
          metaRobotsNofollow
          metaRobotsNoindex
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            ${media()}
          }
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          readingTime
          schema {
            articleType
            pageType
          }
          title
          twitterDescription
          twitterImage {
            ${media()}
          }
          twitterTitle
        }
      }
    }
  `,
}
