import { gql } from "@apollo/client";


export const latestArticlesQuery = {
  query: gql`
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
    }
  `
}