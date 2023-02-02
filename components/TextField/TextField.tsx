import React, { ReactElement, FC } from 'react'

import FieldWrapper from '../FieldWrapper'

import * as Styled from './styles/TextField.style'

import { FormFieldProps } from '@typings/FormField.types'

const TextField: FC<FormFieldProps> = ({
  label,
  isRequired = false,
  id,
  databaseId,
  placeholder,
  labelPlacement,
  type = 'text',
  validationMessage,
}: FormFieldProps): ReactElement => {
  return (
    <FieldWrapper target={typeof id === 'number' ? `input_${id}` : id} label={label} required={isRequired} labelPlacement={labelPlacement} validationMessage={validationMessage}>
      <Styled.TextField
        name={typeof id === 'number' ? `input_${id}` : id}
        id={databaseId ? `input_${databaseId}_${id}` : `input_${id}`}
        placeholder={placeholder}
        type={type}
      />
    </FieldWrapper>
  )
}

export default TextField
