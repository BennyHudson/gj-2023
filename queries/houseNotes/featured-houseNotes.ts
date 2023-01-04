import { gql } from '@apollo/client'

export const houseNotesQuery = {
  query: gql`
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
          houseNotesPodcastColumn {
            ... on HouseNote {
              articleType {
                articleType
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
          houseNotesWatchColumn {
            ... on HouseNote {
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
          houseNotesScrollColumn {
            ... on HouseNote {
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
          houseNotesReadColumn {
            ... on HouseNote {
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
          houseNotesQuoteColumn {
            ... on HouseNote {
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
    }
  `
}