import { gql } from '@apollo/client'
import { seo } from '@queries/fragments/seo'

export const pageQuery = (pageId: number) => {
  return {
    query: gql`
      query teamPageQuery {
        page(id: "${pageId}", idType: DATABASE_ID) {
          title
          uri
          id
          content
          ${seo()}
          featuredImage {
            node {
              sourceUrl
            }
          }
          additionalPageData {
            subtitleText
          }
          membersOfStaff {
            staffEditors {
              name
              position
            }
            staffMembers {
              name
              position
            }
          }
          careers {
            careers {
              jobs {
                jobSpec {
                  id
                  mediaItemUrl
                }
                position
                shortDescription
              }
            }
          }
        }
      }
    `,
  }
}
