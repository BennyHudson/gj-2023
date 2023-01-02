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
  hideLabels = false,
  type = 'text'
}: FormFieldProps): ReactElement => {
  return (
    <FieldWrapper target={target} label={label} required={isRequired} hideLabels={hideLabels}>
      <Styled.TextField name={`input_${id}`} id={`input_${databaseId}_${id}`} placeholder={placeholder} type={type} />
    </FieldWrapper>
  )
}

export default TextField
