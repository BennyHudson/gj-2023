import type { FC, ReactElement } from 'react'
import React from 'react'

import RawHtmlWrapper from '@components/RawHtmlWrapper'

import type { CodeBlockProps } from './CodeBlock.types'
import * as Styled from './styles/CodeBlock.style'

const CodeBlock: FC<CodeBlockProps> = ({ adCode }: CodeBlockProps): ReactElement => {
  return (
    <Styled.CodeBlock>
      <RawHtmlWrapper content={adCode} />
    </Styled.CodeBlock>
  )
}

export default CodeBlock
