import React, { ReactElement, FC } from 'react'
import Link from 'next/link'

import Meta from '@components/typography/Meta'
import Heading from '@components/typography/Heading'
import Paragraph from '@components/typography/Paragraph'
import Thumbnail from '@components/imagery/Thumbnail'
import GJLink from '@components/interactions/Link'

import * as Styled from './styles/WeeklyHighlight.style'

import { Post } from '@typings/Post.types'

const WeeklyHighlight: FC<Post> = ({
  title,
  excerpt,
  uri,
  date,
  categories,
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
        <GJLink to={uri} size={1} weight={3} inverse font='Cera' showIcon>Read More</GJLink>
      </Styled.Content>
      <Thumbnail to={uri} featuredImage={featuredImage.node.sourceUrl} />
    </Styled.WeeklyHighlight>
  )
}

export default WeeklyHighlight
