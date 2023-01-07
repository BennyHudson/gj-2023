import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import { articleContent } from '@queries/fragments/articleContent'
import { giftContent } from '@queries/fragments/giftContent'

disableFragmentWarnings()

export const giftGuideContentQuery = {
  query: gql`
    ${articleContent}
    ${giftContent}
    query giftGuideContentQuery {
      page(id: "388680", idType: DATABASE_ID) {
        pageGifting {
          featuredBrandsLink
          featuredBrandsTitle
          fieldGroupName
          ctaFirst {
            ... on Article {
              ... ArticleContent
            }
          }
          ctaSecond {
            ... on Article {
              ... ArticleContent
            }
          }
          ctaThird {
            ... on Article {
              ... ArticleContent
            }
          }
          featureGuidesMore {
            ... on Article {
              ... ArticleContent
            }
          }
          featuredBrands {
            image {
              sourceUrl
            }
            name
            link
          }
          featuredGuides {
            ... on Article {
              ... ArticleContent
            }
          }
          selectedProducts {
            fieldGroupName
            title
            gifts {
              ... on Gift {
                ... GiftContent
              }
            }
          }
          selectedProductsSecond {
            title
            gifts {
              ... on Gift {
                ... GiftContent
              }
            }
          }
        }
      }
    }
  `
}