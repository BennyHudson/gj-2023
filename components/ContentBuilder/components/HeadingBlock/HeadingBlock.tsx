import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'

import type { HeadingBlockProps } from './HeadingBlock.types'
import * as Styled from './styles/HeadingBlock.style'

const HeadingBlock: FC<HeadingBlockProps> = ({ text }: HeadingBlockProps): ReactElement => {
  return (
    <Styled.HeadingBlock>
      <Heading text={text} weight={3} level={2} font='Cera' size={2} />
    </Styled.HeadingBlock>
  )
}

export default HeadingBlock
