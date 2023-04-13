import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from '@queries/fragments/media'
import type { Seo } from '@queries/fragments/seo'
import { seo } from '@queries/fragments/seo'

export interface Magazine {
  databaseId: number
  additionalIssueContent: {
    issueCoverStar: string
    shortDescription: string
  }
  name: string
  shortDescription: string
  image: FeaturedImage
  seo: Seo
}

export const magazineQuery = (slug: string) => {
  return {
    query: gql`
      query magazineQuery {
        externalProduct(id: "${slug}", idType: SLUG) {
          databaseId
          additionalIssueContent {
            issueCoverStar
            shortDescription
          }
          name
          shortDescription
          image {
            ${media()}
          }
          ${seo()}
        }
      }
    `,
  }
}
