import { gql } from '@apollo/client'

export const latestPostsQuery = {
  query: gql`
    query latestPosts {
      articles(first: 7) {
        nodes {
          title
          date
          uri
          databaseId
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `
}