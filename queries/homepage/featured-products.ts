import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from '@queries/fragments/media'

export interface ShopProduct {
  featured: FeaturedImage
  name: string
  link: string
}

export const featuredProductsQuery = {
  query: gql`
    query featuredProductsQuery {
      clubhousePartnersOptions {
        store {
          store {
            brands {
              featured {
                ${media()}
              }
              name
              link
            }
          }
        }
      }
    }
  `,
}
