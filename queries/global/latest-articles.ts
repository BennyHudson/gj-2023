import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const latestArticlesQuery = (columns: number) => {
  let requestNumber = 12
  if (columns === 4) {
    requestNumber = 18
  }
  return {
    query: gql`
      ${articleContent}
      query latestArticles($after: String, $first: Int = ${requestNumber}) {
        articles(first: $first, after: $after) {
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
