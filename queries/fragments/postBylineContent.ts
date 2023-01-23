import { gql } from '@apollo/client'

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
    sponsorLogo: {
      sourceUrl: string
    }
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
        sourceUrl
      }
      sponsorDisableLink
      sponsorName
      sponsorUrl
    }
  }
`
