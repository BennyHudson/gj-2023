import type { FC, ReactElement } from 'react'
import React from 'react'

import type { LabelProps } from './Label.types'
import * as Styled from './styles/Label.style'

const Label: FC<LabelProps> = ({ target, text, required }: LabelProps): ReactElement => {
  return (
    <Styled.Label htmlFor={target}>
      {text}
      {required && <Styled.Required>*</Styled.Required>}
    </Styled.Label>
  )
}

export default Label
