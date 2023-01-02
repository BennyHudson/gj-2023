import { gql } from "@apollo/client";

export const categoryQuery = (categoryName: string) => {
  return {
    query: gql`
    query categoryQuery {
      category(id: "${categoryName}", idType: NAME) {
        description
        name
        uri
      }
      articles(first: 4, where: {categoryName: "${categoryName}"}) {
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
}