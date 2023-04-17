import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from '@queries/fragments/media'
import type { Seo } from '@queries/fragments/seo'
import { seo } from '@queries/fragments/seo'

export interface Sessions {
  title: string
  databaseId: number
  sessions: {
    sessions: {
      sessionsIntroText: string
      sponsorBackgroundImage: FeaturedImage
      sponsorButtonText: string
      sponsorContent: string
      sponsorLink: string
      sponsorLogoAlt: FeaturedImage
    }
  }
  seo: Seo
}

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
              ${media()}
            }
            sponsorButtonText
            sponsorContent
            sponsorLink
            sponsorLogoAlt {
              ${media()}
            }
          }
        }
        ${seo()}
      }
    }
  `,
}
