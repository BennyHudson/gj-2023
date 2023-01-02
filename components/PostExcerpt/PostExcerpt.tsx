import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockAlt } from '@fortawesome/pro-light-svg-icons'

import Heading from '@components/Heading'
import Meta from '@components/Meta'
import Thumbnail from '@components/Thumbnail'

import * as Styled from './styles/PostExcerpt.style'

import { PostExcerptProps } from './PostExcerpt.types'

const PostExcerpt: FC<PostExcerptProps> = ({
  title,
  date,
  uri,
  categories,
  inverse = false,
  featuredImage,
}: PostExcerptProps): ReactElement => {
  const membersOnly = categories && categories.nodes.find(category => category.name === 'Members')
  return (
    <Styled.PostExcerpt href={uri}>
      <Thumbnail featuredImage={featuredImage.node.sourceUrl} />
      <Meta categories={categories} date={date} inverse={inverse} />
      <Styled.Title inverse={inverse}>
        {membersOnly && <FontAwesomeIcon icon={faLockAlt} />}
        <Heading size={1} text={title} inverse={inverse} />
      </Styled.Title>
      
    </Styled.PostExcerpt>
  )
}

export default PostExcerpt
