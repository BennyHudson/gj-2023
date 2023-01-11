import React, { ReactElement, FC } from 'react'

import FieldWrapper from '../FieldWrapper'

import * as Styled from './styles/TextField.style'

import { FormFieldProps } from '@typings/FormField.types'

const TextField: FC<FormFieldProps> = ({
  target,
  label,
  isRequired,
  id,
  databaseId,
  placeholder,
  labelPlacement,
  type = 'text'
}: FormFieldProps): ReactElement => {
  return (
    <FieldWrapper target={target} label={label} required={isRequired} labelPlacement={labelPlacement}>
      <Styled.TextField name={`input_${id}`} id={databaseId ? `input_${databaseId}_${id}` : `input_${id}`} placeholder={placeholder} type={type} />
    </FieldWrapper>
  )
}

export default TextField
