import React, { ReactElement, FC } from 'react'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'

import * as Styled from './styles/ButtonBlock.style'

import { ButtonBlockProps } from './ButtonBlock.types'

const ButtonBlock: FC<ButtonBlockProps> = ({
  title,
  callToAction,
  link,
  price,
}: ButtonBlockProps): ReactElement => {
  return (
    <Styled.ButtonBlock>
      <div>
        <Heading text={title} weight={3} level={2} font='Cera' size={1} noMargin />
        {price &&
          <Paragraph appearance='secondary'>£{price?.toFixed(2)}</Paragraph>
        }
      </div>
      <Styled.Button href={link}>
        {callToAction ? callToAction : 'Learn More'}
      </Styled.Button>
    </Styled.ButtonBlock>
  )
}

export default ButtonBlock
