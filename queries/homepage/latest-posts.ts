import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const latestPostsQuery = {
  query: gql`
    ${articleContent}
    query latestPosts {
      articles(first: 7) {
        nodes {
          ... ArticleContent
        }
      }
    }
  `
}