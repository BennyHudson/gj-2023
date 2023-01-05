import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const sessionsFeatureQuery = {
  query: gql`
    ${articleContent}
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
          ... ArticleContent
        }
      }
    }
  `
}