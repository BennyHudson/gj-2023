import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const latestArticlesQuery = {
  query: gql`
    ${articleContent}
    query latestArticles($after: String) {
      articles(first: 20, after: $after) {
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