import { gql } from '@apollo/client'
import { seo } from '@queries/fragments/seo'

export const sessionsQuery = {
  query: gql`
    query sessionsPage {
      page(id: 388179, idType: DATABASE_ID) {
        title
        databaseId
        sessions {
          sessions {
            sessionsIntroText
            sponsorBackgroundImage {
              sourceUrl
            }
            sponsorButtonText
            sponsorContent
            sponsorLink
            sponsorLogoAlt {
              sourceUrl
            }
          }
        }
        ${seo()}
      }
    }
  `,
}
