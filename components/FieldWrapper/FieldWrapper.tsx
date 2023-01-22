import React, { ReactElement, FC } from 'react'

import Label from '../Label'

import * as Styled from './styles/FieldWrapper.style'

import { FieldWrapperProps } from './FieldWrapper.types'

const FieldWrapper: FC<FieldWrapperProps> = ({
  target,
  label,
  children,
  required = false,
  labelPlacement = 'TOP',
}: FieldWrapperProps): ReactElement => {
  return (
    <Styled.FieldWrapper labelPlacement={labelPlacement}>
      {labelPlacement !== 'HIDDEN' && <Label target={target} text={label} required={required} />}
      {children}
    </Styled.FieldWrapper>
  )
}

export default FieldWrapper
