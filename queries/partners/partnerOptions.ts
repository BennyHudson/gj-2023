import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from '@queries/fragments/media'

export interface PartnerOptions {
  featuredImage: FeaturedImage
  subTitle: string
}

export const partnerOptionsQuery = {
  query: gql`
    query partnerOptionsQuery {
      clubhousePartnersOptions {
        clubhousePartnersOptions {
          clubhousePartnerArchive {
            featuredImage {
              ${media()}
            }
            subTitle
          }
        }
      }
    }
  `,
}
