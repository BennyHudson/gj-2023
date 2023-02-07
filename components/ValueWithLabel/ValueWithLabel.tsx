import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/ValueWithLabel.style'

import { ValueWithLabelProps } from './ValueWithLabel.types'

const ValueWithLabel: FC<ValueWithLabelProps> = ({ value, label, valueType = 'text' }: ValueWithLabelProps): ReactElement => {
  return (
    <Styled.ValueWithLabel valueType={valueType}>
      <Styled.Label>{label}:</Styled.Label>
      {value}
    </Styled.ValueWithLabel>
  )
}

export default ValueWithLabel
