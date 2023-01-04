import React, { ReactElement, FC } from 'react'

import Section from '@components/Section'
import Thumbnail from '@components/Thumbnail'
import Heading from '@components/Heading'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Link from '@components/Link'

import { SessionsFeatureProps } from './SessionsFeature.types'

import * as Styled from './styles/SessionsFeature.style'

const SessionsFeature: FC<SessionsFeatureProps> = ({ content, post }: SessionsFeatureProps): ReactElement => {
  
  // console.log(post.featuredImage.node.sourceUrl)
  // const featuredArticle = sessionsContent.allWpArticle.edges[0].node

  return (
    <Section appearance='secondary'>
      <Styled.SessionsFeature>
        <Styled.Content>
          <Heading inverse text='GJ Sessions' level={2} size={5} noMargin transform='uppercase' />
          <RawHtmlWrapper inverse content={content} />
          <Link to='/gj-sessions' font='Cera' transform='uppercase' inverse size={1} showIcon>View All</Link>
        </Styled.Content>
        <Styled.Thumbnail>
          <Thumbnail 
            showTitle
            featuredImage={post.featuredImage.node.sourceUrl} 
            to={post.uri}
            title={post.title}
            date={post.date}
            categories={post.categories}
          />
        </Styled.Thumbnail>
      </Styled.SessionsFeature>
    </Section>
  )
}

export default SessionsFeature
