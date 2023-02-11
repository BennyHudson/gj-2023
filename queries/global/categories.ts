import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const categoryQuery = (categoryName: string, columns: number, count?: number) => {
  let requestNumber = 18
  if (columns < 4) {
    requestNumber = 12
  }
  if (count) {
    requestNumber = count
  }
  return {
    query: gql`
      ${articleContent}
      query latestArticlesByCategory($after: String, $first: Int = ${requestNumber}) {
        articles(first: $first, after: $after, where: {categoryName: "${categoryName}"}) {
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
