import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'
import { postContent } from '@queries/fragments/postContent'

export const articleCategoryQuery = (categoryId: number, columns: number, count?: number) => {
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
        articles(first: $first, after: $after, where: {categoryId: ${categoryId}}) {
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

export const postCategoryQuery = (categoryId: number, columns: number, count?: number) => {
  let requestNumber = 18
  if (columns < 4) {
    requestNumber = 12
  }
  if (count) {
    requestNumber = count
  }
  return {
    query: gql`
      ${postContent}
      query latestArticlesByCategory($after: String, $first: Int = ${requestNumber}) {
        posts(first: $first, after: $after, where: {categoryId: ${categoryId}}) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              ...PostContent
            }
          }
        }
      }
    `,
  }
}
