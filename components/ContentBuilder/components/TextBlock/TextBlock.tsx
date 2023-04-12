import type { FC, ReactElement } from 'react'
import React from 'react'

import RawHtmlWrapper from '@components/RawHtmlWrapper'

import * as Styled from './styles/TextBlock.style'
import type { TextBlockProps } from './TextBlock.types'

const TextBlock: FC<TextBlockProps> = ({ content }: TextBlockProps): ReactElement => {
  return (
    <Styled.TextBlock>
      <RawHtmlWrapper content={content} />
    </Styled.TextBlock>
  )
}

export default TextBlock
