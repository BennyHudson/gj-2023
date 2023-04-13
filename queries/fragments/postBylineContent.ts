import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import { media } from './media'

export interface Byline {
  author: {
    node: {
      name: string
    }
  }
  byLineAdditional?: {
    photographerName?: string
    otherByLines?: {
      content: string
      title: string
    }[]
  }
  sponsoredPost?: {
    sponsorLogo: FeaturedImage
    sponsorDisableLink: boolean
    sponsorName: string
    sponsorUrl: string
  }
}

export const bylineContent = gql`
  fragment BylineContent on Post {
    author {
      node {
        name
      }
    }
    byLineAdditional {
      photographerName
      otherByLines {
        content
        title
      }
    }
    sponsoredPost {
      sponsorLogo {
        ${media()}
      }
      sponsorDisableLink
      sponsorName
      sponsorUrl
    }
  }
`
