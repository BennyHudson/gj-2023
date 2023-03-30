import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import { articleContent } from '@queries/fragments/articleContent'
import { giftContent } from '@queries/fragments/giftContent'
import { seo } from '@queries/fragments/seo'

disableFragmentWarnings()

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
              fullSize: sourceUrl
              postThumb: sourceUrl(size: POST_THUMB)
              squareThumb: sourceUrl(size: POST_SQUARE)
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
