import type { FC, ReactElement } from 'react'
import React from 'react'

import RawHtmlWrapper from '@components/RawHtmlWrapper'

import type { PageContentBlockProps } from './PageContentBlock.types'
import * as Styled from './styles/PageContentBlock.style'

const PageContentBlock: FC<PageContentBlockProps> = ({ content }: PageContentBlockProps): ReactElement => {
  return (
    <Styled.PageContentBlock>
      <RawHtmlWrapper content={content} />
    </Styled.PageContentBlock>
  )
}

export default PageContentBlock
