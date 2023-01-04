import React, { ReactElement, FC } from 'react'

import Title from '@components/Title'
import Section from '@components/Section'
import Thumbnail from '@components/Thumbnail'
import PostExcerpt from '@components/PostExcerpt'
import PostGrid from '@components/PostGrid'

import * as Styled from './styles/SessionsHeader.style'

import { SessionsHeaderProps } from './SessionsHeader.types'

const SessionsHeader: FC<SessionsHeaderProps> = ({
  featuredArticle,
  secondaryArticles,
  tertiaryArticles,
}: SessionsHeaderProps): ReactElement => {
  // console.log(secondaryArticles.nodes)
  return (
    <>
      <Title title='Latest Performers' inverse />
      <Styled.PostGrid>
        <Styled.Feature>
          <Thumbnail showTitle to={featuredArticle.uri} {...featuredArticle} />
        </Styled.Feature>
        <Styled.SecondaryPosts>
          {secondaryArticles.nodes.map((post, index) => {
            return (
              <PostExcerpt key={index} {...post} inverse />
            )
          })}
        </Styled.SecondaryPosts>
      </Styled.PostGrid>
      <PostGrid posts={tertiaryArticles.nodes} inverse />
    </>
  )
}

export default SessionsHeader
