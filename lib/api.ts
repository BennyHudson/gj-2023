import { gql } from '@apollo/client'

import client from '@lib/apollo-client'

const queryPostType = (postType: string, after?: string) => {
  return {
    query: gql`
      query getAll {
        ${postType}s(first: 1000, after: "${after}") {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              slug
            }
          }
        }
      }
    `
  }
}

export const getAllPosts = async (postType: string): Promise<{cursor: string; node: { slug: string}}[]> => {
  const allPosts = []
  let hasNextPage = true
  let after = ''

  while (hasNextPage) {
    const posts = await client.query(queryPostType(postType, after))
    if (posts) {
      allPosts.push(...posts.data[`${postType}s`].edges)
      // hasNextPage = posts.data[`${postType}s`].pageInfo.hasNextPage
      hasNextPage = false
      after = posts.data[`${postType}s`].pageInfo.endCursor
    }
  }

  return allPosts
}