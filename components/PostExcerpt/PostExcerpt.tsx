import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faLockAlt } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'

import Heading from '@components/Heading'
import Meta from '@components/Meta'
import Thumbnail from '@components/Thumbnail'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { PostExcerptProps } from './PostExcerpt.types'
import * as Styled from './styles/PostExcerpt.style'

const PostExcerpt: FC<PostExcerptProps> = ({ post, inverse = false, priority = false }: PostExcerptProps): ReactElement => {
  const { subscriptions } = useContext(PageContext) as PageContextProps

  const membersOnly = post.categories && post.categories.nodes.find((category) => category.name === 'Members')

  return (
    <Styled.PostExcerpt href={post.uri}>
      <Thumbnail priority={priority} featuredImage={post.featuredImage.node.postThumb} />
      <Styled.Body>
        <Meta categories={post.categories} date={post.date} inverse={inverse} />
        <Styled.Title inverse={inverse}>
          {(!subscriptions || subscriptions?.every((subscription) => subscription.status !== 'active')) && membersOnly && (
            <Styled.IconWrapper>
              <FontAwesomeIcon icon={faLockAlt as IconProp} />
            </Styled.IconWrapper>
          )}
          <Heading size={1} text={post.title} inverse={inverse} />
        </Styled.Title>
      </Styled.Body>
    </Styled.PostExcerpt>
  )
}

export default PostExcerpt
