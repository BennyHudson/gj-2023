import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const latestPostsQuery = (exclude?: string) => {
  return {
    query: gql`
      ${articleContent}
      query latestPosts {
        articles(first: 6${exclude && `, where: {notIn: "${exclude}"}`}) {
          nodes {
            ...ArticleContent
          }
        }
      }
    `,
  }
}
