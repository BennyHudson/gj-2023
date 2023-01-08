import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const categoryQuery = (categoryName: string, columns: number) => {
  return {
    query: gql`
      ${articleContent}
      query latestArticlesByCategory($after: String) {
        articles(first: ${columns === 4 ? 20 : 12}, after: $after, where: {categoryName: "${categoryName}"}) {
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
    `
  }
}