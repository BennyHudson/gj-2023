import { gql } from "@apollo/client";

export const sessionsFeatureQuery = {
  query: gql`
    query sessionsQuery {
      page(id: "388179", idType: DATABASE_ID) {
        sessions {
          sessions {
            sessionsIntroText
          }
        }
      }
      articles(where: {categoryName: "GJ Sessions"}, first: 1) {
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