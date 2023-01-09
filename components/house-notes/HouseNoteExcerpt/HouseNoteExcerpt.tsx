import React, { ReactElement, FC } from 'react'

import Thumbnail from '@components/imagery/Thumbnail'
import Heading from '@components/typography/Heading'
import Paragraph from '@components/typography/Paragraph'
import Link from '@components/interactions/Link'

import * as Styled from './styles/HouseNoteExcerpt.style'

import { HouseNoteExcerptProps } from './HouseNoteExcerpt.types'

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
      {featuredImage && <Thumbnail featuredImage={featuredImage.node.sourceUrl} to={uri} type='square' priority={priority} />}
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
