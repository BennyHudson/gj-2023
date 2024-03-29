import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Link from '@components/Link'
import Paragraph from '@components/Paragraph'
import Thumbnail from '@components/Thumbnail'

import type { HouseNoteExcerptProps } from './HouseNoteExcerpt.types'
import * as Styled from './styles/HouseNoteExcerpt.style'

const HouseNoteExcerpt: FC<HouseNoteExcerptProps> = ({
  feature = true,
  featuredImage,
  uri,
  articleType,
  title,
  author,
  priority = false,
}: HouseNoteExcerptProps): ReactElement => {
  return (
    <Styled.HouseNoteExcerpt>
      {featuredImage && <Thumbnail featuredImage={featuredImage.node.squareThumb} to={uri} type='square' priority={priority} />}
      <Styled.Body>
        <Styled.ArticleType>
          <span>{articleType.articleType}</span>
        </Styled.ArticleType>
        <Heading text={title} size={feature ? 2 : 1} noMargin />
        {articleType.articleTypeLandingPageExcerpt && (
          <>
            <Paragraph size={2} font='Cera' appearance='secondary'>
              {articleType.articleTypeLandingPageExcerpt}
            </Paragraph>
          </>
        )}
        <Styled.Footer>
          {author && (
            <Paragraph size={1} weight={3} font='Cera' noMargin>
              Words: {author.node.name}
            </Paragraph>
          )}
          <Link to={uri} size={1} weight={3} font='Cera' transform='uppercase' showIcon>
            Read More
          </Link>
        </Styled.Footer>
      </Styled.Body>
    </Styled.HouseNoteExcerpt>
  )
}

export default HouseNoteExcerpt
