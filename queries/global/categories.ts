import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const categoryQuery = (categoryName: string, columns: number, count?: number) => {
  return {
    query: gql`
      ${articleContent}
      query latestArticlesByCategory($after: String) {
        articles(first: ${count ? count : (columns === 4 ? 20 : 12)}, after: $after, where: {categoryName: "${categoryName}"}) {
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