import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faLockAlt } from '@fortawesome/pro-light-svg-icons'

import Heading from '@components/typography/Heading'
import Meta from '@components/typography/Meta'
import Thumbnail from '@components/imagery/Thumbnail'

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
  const membersOnly = categories && categories.nodes.find(category => category.name === 'Members')
  return (
    <Styled.PostExcerpt href={uri} scroll={false}>
      <Thumbnail priority={priority} featuredImage={featuredImage?.node.sourceUrl} />
      <Meta categories={categories} date={date} inverse={inverse} />
      <Styled.Title inverse={inverse}>
        {membersOnly && <Styled.IconWrapper><FontAwesomeIcon icon={faLockAlt as IconProp} /></Styled.IconWrapper>}
        <Heading size={1} text={title} inverse={inverse} />
      </Styled.Title>
      
    </Styled.PostExcerpt>
  )
}

export default PostExcerpt