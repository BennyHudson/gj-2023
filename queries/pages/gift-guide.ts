import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import type { FeaturedImage } from '@typings/FeaturedImage.types'

import type { Article } from '@queries/fragments/articleContent'
import { articleContent } from '@queries/fragments/articleContent'
import type { Gift } from '@queries/fragments/giftContent'
import { giftContent } from '@queries/fragments/giftContent'
import { media } from '@queries/fragments/media'
import type { Post } from '@queries/fragments/postContent'
import { seo } from '@queries/fragments/seo'

disableFragmentWarnings()

export interface GiftGuide {
  featuredBrandsLink: string
  featuredBrandsTitle: string
  fieldGroupName: string
  ctaFirst: Post | Article
  ctaSecond: Post | Article
  ctaThird: Post | Article
  featuredGuides: Post[] | Article[]
  featureGuidesMore: Post[] | Article[]
  featuredBrands: {
    image: FeaturedImage
    name: string
    link: string
  }[]
  selectedProducts: {
    fieldGroupName: string
    title: string
    gifts: Gift[]
  }
  selectedProductsSecond: {
    title: string
    gifts: Gift[]
  }
}

export const giftGuideContentQuery = {
  query: gql`
    ${articleContent}
    ${giftContent}
    query giftGuideContentQuery {
      page(id: "388680", idType: DATABASE_ID) {
        databaseId
        ${seo()}
        pageGifting {
          featuredBrandsLink
          featuredBrandsTitle
          fieldGroupName
          ctaFirst {
            ... on Article {
              ...ArticleContent
            }
          }
          ctaSecond {
            ... on Article {
              ...ArticleContent
            }
          }
          ctaThird {
            ... on Article {
              ...ArticleContent
            }
          }
          featureGuidesMore {
            ... on Article {
              ...ArticleContent
            }
          }
          featuredBrands {
            image {
              ${media()}
            }
            name
            link
          }
          featuredGuides {
            ... on Article {
              ...ArticleContent
            }
          }
          selectedProducts {
            fieldGroupName
            title
            gifts {
              ... on Gift {
                ...GiftContent
              }
            }
          }
          selectedProductsSecond {
            title
            gifts {
              ... on Gift {
                ...GiftContent
              }
            }
          }
        }
      }
    }
  `,
}
