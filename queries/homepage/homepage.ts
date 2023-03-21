import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import { articleContent } from '@queries/fragments/articleContent'
import { seo } from '@queries/fragments/seo'

disableFragmentWarnings()

export const homepageQuery = {
  query: gql`
    ${articleContent}
    query homepageQuery {
      page(id: "cG9zdDo3NDE3NA==") {
        databaseId
        homeFeaturedPost {
          homeFeaturedPost {
            ... on Article {
              ...ArticleContent
            }
          }
        }
        homeWeeklyHighlight {
          homeWeeklyHighlight {
            ... on Article {
              ...ArticleContent
            }
          }
        }
        homeEditorsPick {
          homeEditorsPick {
            ... on Article {
              ...ArticleContent
            }
          }
        }
        ${seo()}
      }
    }
  `,
}
