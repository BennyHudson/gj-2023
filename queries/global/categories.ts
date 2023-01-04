import { gql } from '@apollo/client'

export const categoryQuery = (categoryName: string) => {
  return {
    query: gql`
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
}