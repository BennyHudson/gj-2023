import React, { ReactElement, FC } from 'react'
import { useQuery, gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

import Title from '@components/typography/Title'
import PostGrid from '@components/grids/PostGrid'

import { FurtherReadingProps } from './FurtherReading.types'

const FurtherReading: FC<FurtherReadingProps> = ({
  articleId,
  category,
}: FurtherReadingProps): ReactElement => {
  const { data } = useQuery(gql`
    ${articleContent}
    query furtherReading {
      categories(where: {name: "${category}"}) {
        nodes {
          id
          articles(first: 3, where: {notIn: "${articleId}"}) {
            nodes {
              ... ArticleContent
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Title title='Further reading' />
      {data && <PostGrid columns={3} posts={data.categories.nodes[0].articles.nodes}  />}
    </>
  )
}

export default FurtherReading
