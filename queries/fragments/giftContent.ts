import { gql } from '@apollo/client'

export const giftContent = gql`
  fragment GiftContent on Gift {
    title
    gift {
      giftLink
      giftPrice
      giftBrand
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
`