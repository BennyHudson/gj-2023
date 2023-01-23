import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Label.style'

import { LabelProps } from './Label.types'

const Label: FC<LabelProps> = ({ target, text, required }: LabelProps): ReactElement => {
  return (
    <Styled.Label htmlFor={target}>
      {text}
      {required && <Styled.Required>*</Styled.Required>}
    </Styled.Label>
  )
}

export default Label
