import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import { articleContent } from '@queries/fragments/articleContent'

disableFragmentWarnings()

export const homepageQuery = {
  query: gql`
    ${articleContent}
    query homepageQuery {
      page(id: "cG9zdDo3NDE3NA==") {
        homeFeaturedPost {
          homeFeaturedPost {
            ... on Article {
              ... ArticleContent
            }
          }
        }
        homeWeeklyHighlight {
          homeWeeklyHighlight {
            ... on Article {
              ... ArticleContent
            }
          }
        }
        homeEditorsPick {
          homeEditorsPick {
            ... on Article {
              ... ArticleContent
            }
          }
        }
        seo {
          breadcrumbs {
            text
            url
          }
          canonical
          cornerstone
          focuskw
          metaDesc
          metaKeywords
          metaRobotsNofollow
          metaRobotsNoindex
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            sourceUrl
          }
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          readingTime
          schema {
            articleType
            pageType
          }
          title
          twitterDescription
          twitterImage {
            sourceUrl
          }
          twitterTitle
        }
      }
    }
  `,
}