import React, { ReactElement, FC } from 'react'

import Heading from '@components/Heading'

import * as Styled from './styles/HeadingBlock.style'

import { HeadingBlockProps } from './HeadingBlock.types'

const HeadingBlock: FC<HeadingBlockProps> = ({ text }: HeadingBlockProps): ReactElement => {
  return (
    <Styled.HeadingBlock>
      <Heading text={text} weight={3} level={2} font='Cera' size={2} />
    </Styled.HeadingBlock>
  )
}

export default HeadingBlock
