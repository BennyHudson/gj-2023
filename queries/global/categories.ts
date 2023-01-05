import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const categoryQuery = (categoryName: string) => {
  return {
    query: gql`
      ${articleContent}
      query latestArticlesByCategory($after: String) {
        articles(first: 20, after: $after, where: {categoryName: "${categoryName}"}) {
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