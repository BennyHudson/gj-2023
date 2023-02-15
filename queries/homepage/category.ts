import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

export const articleCategoryQuery = (categoryName: string) => {
  return {
    query: gql`
      ${articleContent}
      query articleCategoryQuery {
        category(id: "${categoryName}", idType: NAME) {
          description
          name
          uri
        }
        articles(first: 4, where: {categoryName: "${categoryName}"}) {
          nodes {
            ...ArticleContent
          }
        }
      }
    `,
  }
}
