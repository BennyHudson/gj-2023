import React, { ReactElement, FC } from 'react'

import Thumbnail from '@components/Thumbnail'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Link from '@components/Link'

import * as Styled from './styles/HouseNoteExcerpt.style'

import { HouseNoteExcerptProps } from './HouseNoteExcerpt.types'

const HouseNoteExcerpt: FC<HouseNoteExcerptProps> = ({
  feature = true,
  featuredImageDatabaseId,
  uri,
  articleType,
  title,
  author,
}: HouseNoteExcerptProps): ReactElement => {
  return (
    <Styled.HouseNoteExcerpt>
      {featuredImageDatabaseId && <Thumbnail featuredImageDatabaseId={featuredImageDatabaseId} to={uri} type='square' />}
      <Styled.ArticleType><span>{articleType.articleType}</span></Styled.ArticleType>
      <Heading text={title} size={feature ? 2 : 1} noMargin />
      {articleType.articleTypeLandingPageExcerpt && (
        <>
          <Paragraph size={2} font='Cera' appearance='secondary'>{articleType.articleTypeLandingPageExcerpt}</Paragraph>
        </>
      )}
      <Styled.Footer>
        {author && <Styled.ArticleType><span>Words: {author.node.name}</span></Styled.ArticleType>}
        <Link to={uri} size={1} weight={3} font='Cera' transform='uppercase' showIcon>Read More</Link>
      </Styled.Footer>
    </Styled.HouseNoteExcerpt>
  )
}

export default HouseNoteExcerpt
