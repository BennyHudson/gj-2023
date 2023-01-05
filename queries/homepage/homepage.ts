import { gql } from "@apollo/client";

export const homepageQuery = {
  query: gql`
    query homepageQuery {
      page(id: "cG9zdDo3NDE3NA==") {
        homeFeaturedPost {
          homeFeaturedPost {
            ... on Article {
              title
              date
              categories {
                nodes {
                  name
                }
              }
              uri
              databaseId
              articleAcf {
                standfirst
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
        homeWeeklyHighlight {
          homeWeeklyHighlight {
            ... on Article {
              title
              date
              categories {
                nodes {
                  name
                }
              }
              uri
              databaseId
              articleAcf {
                standfirst
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
        homeEditorsPick {
          homeEditorsPick {
            ... on Article {
              title
              date
              categories {
                nodes {
                  name
                }
              }
              uri
              databaseId
              articleAcf {
                standfirst
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `,
}