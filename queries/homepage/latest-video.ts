import { gql } from "@apollo/client";

export const latestVideoQuery = {
  query: gql`
    query latestVideoQuery {
      articles(where: {categoryName: "Video"}, first: 4) {
        nodes {
          articleAcf {
            standfirst
          }
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          uri
          databaseId
          title
          date
        }
      }
    }
  `
}