import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const giftGuideQuery = {
  query: gql`
    ${articleContent}
    query giftGuideQuery {
      page(id: "388680", idType: DATABASE_ID) {
        pageGifting {
          ctaFirst {
            ... on Article {
              ...ArticleContent
            }
          }
        }
      }
    }
  `,
}
