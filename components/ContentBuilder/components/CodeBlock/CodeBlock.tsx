import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/CodeBlock.style'

import { CodeBlockProps } from './CodeBlock.types'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

const CodeBlock: FC<CodeBlockProps> = ({ adCode }: CodeBlockProps): ReactElement => {
  return (
    <Styled.CodeBlock>
      <RawHtmlWrapper content={adCode} />
    </Styled.CodeBlock>
  )
}

export default CodeBlock
