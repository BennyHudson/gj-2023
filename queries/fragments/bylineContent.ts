import { gql } from '@apollo/client'

export const bylineContent = gql`
  fragment BylineContent on Article {
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