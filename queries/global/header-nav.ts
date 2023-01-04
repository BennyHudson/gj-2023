import { gql } from '@apollo/client'

export const headerNavQuery = {
  query: gql`
    query mainMenu {
      menu(id: "dGVybTo5MjQx") {
        menuItems(first: 1000) {
          nodes {
            key: id
            label
            uri
            parentId
          }
        }
      }
      podcasts(first: 4) {
        nodes {
          uri
          databaseId
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          podcasts {
            podcastMeta {
              guest {
                name
                about
              }
            }
          }
        }
      }
      houseNotes(first: 4) {
        nodes {
          uri
          databaseId
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      videos: articles(where: {categoryName: "Video"}, first: 4) {
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
      sessions: articles(where: {categoryName: "GJ Sessions"}, first: 4) {
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
  `,
}

