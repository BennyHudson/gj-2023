import React, { FC, ReactElement } from 'react'

import { HeadingProps } from './Heading.types'

import * as Styled from './styles/Heading.style'

const Heading: FC<HeadingProps> = ({
  text,
  level = 2,
  size = 2,
  noMargin = false,
  inverse = false,
  weight = 1,
  font = 'Chronicle',
  transform,
  appearance = 'primary',
  state,
}: HeadingProps): ReactElement => {
  return (
    <Styled.Heading
      as={`h${level}` as React.ElementType}
      size={size}
      noMargin={noMargin}
      inverse={inverse}
      weight={weight}
      font={font}
      transform={transform}
      appearance={appearance}
      state={state}
    >
      {text}
    </Styled.Heading>
  )
}

export default Heading
