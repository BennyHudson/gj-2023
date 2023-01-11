import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/ValueWithLabel.style'

import { ValueWithLabelProps } from './ValueWithLabel.types'

const ValueWithLabel: FC<ValueWithLabelProps> = ({
  value,
  label,
}: ValueWithLabelProps): ReactElement => {
  return (
    <Styled.ValueWithLabel>
      <Styled.Label>{label}:</Styled.Label>
      {value}
    </Styled.ValueWithLabel>
  )
}

export default ValueWithLabel
