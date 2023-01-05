import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const latestVideoQuery = {
  query: gql`
    ${articleContent}
    query latestVideoQuery {
      articles(where: {categoryName: "Video"}, first: 4) {
        nodes {
          ... ArticleContent
        }
      }
    }
  `
}