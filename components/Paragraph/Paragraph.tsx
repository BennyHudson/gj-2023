import type { FC, ReactElement } from 'react'
import React from 'react'

import type { ParagraphProps } from './Paragraph.types'
import * as Styled from './styles/Paragraph.style'

const Paragraph: FC<ParagraphProps> = ({
  appearance = 'primary',
  children,
  text,
  size = 3,
  weight = 2,
  inverse = false,
  font = 'Chronicle',
  transform,
  noMargin = false,
}: ParagraphProps): ReactElement => {
  return (
    <Styled.Paragraph
      appearance={appearance}
      $inverse={inverse}
      size={size}
      weight={weight}
      font={font}
      transform={transform}
      noMargin={noMargin}
    >
      {text || children}
    </Styled.Paragraph>
  )
}

export default Paragraph
