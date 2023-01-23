import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/PageContentBlock.style'

import { PageContentBlockProps } from './PageContentBlock.types'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

const PageContentBlock: FC<PageContentBlockProps> = ({ content }: PageContentBlockProps): ReactElement => {
  return (
    <Styled.PageContentBlock>
      <RawHtmlWrapper content={content} />
    </Styled.PageContentBlock>
  )
}

export default PageContentBlock
