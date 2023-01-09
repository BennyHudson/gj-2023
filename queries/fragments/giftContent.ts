import { gql } from '@apollo/client'

export interface Gift {
  title: string
  gift: {
    giftLink: string
    giftPrice: string
    giftBrand: string
  }
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
}

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