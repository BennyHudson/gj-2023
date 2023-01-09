import React, { ReactElement, FC } from 'react'

import RawHtmlWrapper from '@components/typography/RawHtmlWrapper'

import * as Styled from './styles/TextBlock.style'

import { TextBlockProps } from './TextBlock.types'

const TextBlock: FC<TextBlockProps> = ({
  content,
}: TextBlockProps): ReactElement => {
  return (
    <Styled.TextBlock>
      <RawHtmlWrapper content={content} />
    </Styled.TextBlock>
  )
}

export default TextBlock
