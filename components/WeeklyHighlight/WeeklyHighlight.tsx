import React, { ReactElement, FC } from 'react'
import Link from 'next/link'

import Meta from '@components/Meta'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Thumbnail from '@components/Thumbnail'

import * as Styled from './styles/WeeklyHighlight.style'

import { Post } from '@typings/Post.types'

const WeeklyHighlight: FC<Post> = ({
  title,
  excerpt,
  uri,
  date,
  categories,
  featuredImageDatabaseId,
  featuredImage,
}: Post): ReactElement => {
  return (
    <Styled.WeeklyHighlight>
      <Styled.Content>
        <Meta date={date} categories={categories} />
        <Link href={uri}>
          <Heading size={4} text={title} noMargin font='ChronicleCondensed' />
        </Link>
        <Paragraph appearance='secondary' weight={1}>{excerpt}</Paragraph>
      </Styled.Content>
      <Thumbnail to={uri} featuredImage={featuredImage.node.sourceUrl} />
    </Styled.WeeklyHighlight>
  )
}

export default WeeklyHighlight
