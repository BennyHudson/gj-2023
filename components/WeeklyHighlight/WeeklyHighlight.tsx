import Link from 'next/link'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import GJLink from '@components/Link'
import Meta from '@components/Meta'
import Paragraph from '@components/Paragraph'
import Section from '@components/Section'
import Thumbnail from '@components/Thumbnail'
import Title from '@components/Title'

import { useBreakpoints } from '@hooks/useBreakpoints'

import * as Styled from './styles/WeeklyHighlight.style'
import type { WeeklyHighlightProps } from './WeeklyHighlight.types'

const WeeklyHighlight: FC<WeeklyHighlightProps> = ({
  title,
  excerpt,
  uri,
  date,
  categories,
  featuredImage,
}: WeeklyHighlightProps): ReactElement => {
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
          <Paragraph appearance='secondary' size={mdAndAbove ? 3 : 2} weight={1}>
            {excerpt}
          </Paragraph>
          <GJLink to={uri} size={1} weight={3} inverse font='Cera' showIcon>
            Read More
          </GJLink>
        </Styled.Content>
        <Thumbnail to={uri} featuredImage={featuredImage.node.large} />
      </Styled.WeeklyHighlight>
    </Section>
  )
}

export default WeeklyHighlight
