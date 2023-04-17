import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import type { Article } from '@queries/fragments/articleContent'
import { articleContent } from '@queries/fragments/articleContent'
import type { Post } from '@queries/fragments/postContent'
import type { Seo } from '@queries/fragments/seo'
import { seo } from '@queries/fragments/seo'

disableFragmentWarnings()

export interface HomepageData {
  databaseId: number
  homeFeaturedPost: {
    homeFeaturedPost: Article | Post
  }
  homeWeeklyHighlight: {
    homeWeeklyHighlight: Article | Post
  }
  homeEditorsPick: {
    homeEditorsPick: Article[] | Post[]
  }
  seo: Seo
}

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
