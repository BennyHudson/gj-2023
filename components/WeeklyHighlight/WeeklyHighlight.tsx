import React, { ReactElement, FC } from 'react'
import Link from 'next/link'

import Meta from '@components/Meta'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Thumbnail from '@components/Thumbnail'
import GJLink from '@components/Link'
import Section from '@components/Section'
import Title from '@components/Title'

import * as Styled from './styles/WeeklyHighlight.style'

import { Post } from '@typings/Post.types'
import { useBreakpoints } from '@hooks/useBreakpoints'

const WeeklyHighlight: FC<Post> = ({
  title,
  excerpt,
  uri,
  date,
  categories,
  featuredImage,
}: Post): ReactElement => {
  const { mdAndAbove } = useBreakpoints()
  return (
    <Section>
      <Title title='Weekly Highlight' />
      <Styled.WeeklyHighlight>
        <Styled.Content>
          <Meta date={date} categories={categories} />
          <Link href={uri}>
            <Heading size={mdAndAbove ? 4 : 3} text={title} noMargin font='ChronicleCondensed' />
          </Link>
          <Paragraph appearance='secondary' size={mdAndAbove ? 3 : 2} weight={1}>{excerpt}</Paragraph>
          <GJLink to={uri} size={1} weight={3} inverse font='Cera' showIcon>Read More</GJLink>
        </Styled.Content>
        <Thumbnail to={uri} featuredImage={featuredImage.node.sourceUrl} />
      </Styled.WeeklyHighlight>
    </Section>
  )
}

export default WeeklyHighlight
