import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const coverInterviewsQuery = {
  query: gql`
    ${articleContent}
    query coverInterviews {
      category(id: "cover-interviews", idType: SLUG) {
        description
        name
        uri
      }
      articles(first: 4, where: {categoryName: "Cover Interviews"}) {
        nodes {
          ...ArticleContent
        }
      }
    }
  `
}