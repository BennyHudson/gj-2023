import type { FC, ReactElement } from 'react'
import React from 'react'

import * as Styled from './styles/ValueWithLabel.style'
import type { ValueWithLabelProps } from './ValueWithLabel.types'

const ValueWithLabel: FC<ValueWithLabelProps> = ({ value, label, valueType = 'text', transform }: ValueWithLabelProps): ReactElement => {
  return (
    <Styled.ValueWithLabel valueType={valueType} transform={transform}>
      <Styled.Label>{label}:</Styled.Label>
      {value}
    </Styled.ValueWithLabel>
  )
}

export default ValueWithLabel
