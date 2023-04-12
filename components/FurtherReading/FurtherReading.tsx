import { gql, useQuery } from '@apollo/client'
import type { FC, ReactElement } from 'react'
import React from 'react'

import PostGrid from '@components/PostGrid'
import Title from '@components/Title'

import { articleContent } from '@queries/fragments/articleContent'

import type { FurtherReadingProps } from './FurtherReading.types'

const FurtherReading: FC<FurtherReadingProps> = ({ articleId, category }: FurtherReadingProps): ReactElement => {
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
      {data && <PostGrid columns={3} posts={data.categories.nodes[0].articles.nodes} />}
    </>
  )
}

export default FurtherReading
