import React, { ReactElement, FC, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faLockAlt } from '@fortawesome/pro-thin-svg-icons'

import Heading from '@components/Heading'
import Meta from '@components/Meta'
import Thumbnail from '@components/Thumbnail'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/PostExcerpt.style'

import { PostExcerptProps } from './PostExcerpt.types'

const PostExcerpt: FC<PostExcerptProps> = ({
  title,
  date,
  uri,
  categories,
  inverse = false,
  featuredImage,
  priority = false,
}: PostExcerptProps): ReactElement => {
  const { subscriptions } = useContext(PageContext) as PageContextProps

  const membersOnly = categories && categories.nodes.find((category) => category.name === 'Members')

  return (
    <Styled.PostExcerpt href={uri}>
      <Thumbnail priority={priority} featuredImage={featuredImage?.node.postThumb} />
      <Styled.Body>
        <Meta categories={categories} date={date} inverse={inverse} />
        <Styled.Title inverse={inverse}>
          {(!subscriptions || subscriptions?.every((subscription) => subscription.status !== 'active')) && membersOnly && (
            <Styled.IconWrapper>
              <FontAwesomeIcon icon={faLockAlt as IconProp} />
            </Styled.IconWrapper>
          )}
          <Heading size={1} text={title} inverse={inverse} />
        </Styled.Title>
      </Styled.Body>
    </Styled.PostExcerpt>
  )
}

export default PostExcerpt
