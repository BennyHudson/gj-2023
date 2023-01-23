import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const latestArticlesQuery = (columns: number) => {
  return {
    query: gql`
      ${articleContent}
      query latestArticles($after: String) {
        articles(first: ${columns === 4 ? 20 : 12}, after: $after) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              ...ArticleContent
            }
          }
        }
      }
    `,
  }
}
