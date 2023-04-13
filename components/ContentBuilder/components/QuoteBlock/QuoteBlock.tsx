import he from 'he'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { QuoteBlockProps } from './QuoteBlock.types'
import * as Styled from './styles/QuoteBlock.style'

const QuoteBlock: FC<QuoteBlockProps> = ({ text }: QuoteBlockProps): ReactElement => {
  return <Styled.QuoteBlock>{he.decode(text)}</Styled.QuoteBlock>
}

export default QuoteBlock
