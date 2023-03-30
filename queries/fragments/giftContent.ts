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
        fullSize: sourceUrl
        postThumb: sourceUrl(size: POST_THUMB)
        squareThumb: sourceUrl(size: POST_SQUARE)
      }
    }
  }
`
