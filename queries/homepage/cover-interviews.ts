import { gql } from "@apollo/client";

export const coverInterviewsQuery = {
  query: gql`
    query coverInterviews {
      category(id: "cover-interviews", idType: SLUG) {
        description
        name
        uri
      }
      articles(first: 4, where: {categoryName: "Cover Interviews"}) {
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