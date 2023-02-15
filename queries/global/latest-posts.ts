import { gql } from '@apollo/client'

import { postContent } from '@queries/fragments/postContent'

export const latestPostsQuery = (columns: number) => {
  let requestNumber = 12
  if (columns === 4) {
    requestNumber = 18
  }
  return {
    query: gql`
      ${postContent}
      query latestPosts($after: String, $first: Int = ${requestNumber}) {
        posts(first: $first, after: $after) {
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
