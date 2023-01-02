import React, { ReactElement, FC } from 'react'
import he from 'he'

import * as Styled from './styles/QuoteBlock.style'

import { QuoteBlockProps } from './QuoteBlock.types'

const QuoteBlock: FC<QuoteBlockProps> = ({
  text,
}: QuoteBlockProps): ReactElement => {
  return (
    <Styled.QuoteBlock>
      {he.decode(text)}
    </Styled.QuoteBlock>
  )
}

export default QuoteBlock
