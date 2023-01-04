import { gql } from '@apollo/client'

export const podcastOptionsQuery = {
  query: gql`
    query podcastOptionsQuery {
      podcastOptions {
        podcastOptions {
          podcastGlobal {
            overviewDescription
            producer
            host {
              name
              user {
                moreInfo {
                  role
                  profileImage {
                    sourceUrl
                  }
                }
              }
            }
            featured {
              featured {
                ... on Podcast {
                  podcasts {
                    podcastMeta {
                      guest {
                        name
                        about
                      }
                    }
                  }
                  uri
                  title
                  date
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
              hero {
                ... on Podcast {
                  uri
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
            }
          }
        }
      }
    }
  `
}