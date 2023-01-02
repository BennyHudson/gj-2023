import React, { ReactElement, FC } from 'react'

import FieldWrapper from '../FieldWrapper'

import * as Styled from './styles/TextArea.style'

import { FormFieldProps } from '@typings/FormField.types'

const TextArea: FC<FormFieldProps> = ({
  target,
  label,
  isRequired,
  id,
  databaseId,
}: FormFieldProps): ReactElement => {
  return (
    <FieldWrapper target={target} label={label} required={isRequired}>
      <Styled.TextArea name={`input_${id}`} id={`input_${databaseId}_${id}`} as='textarea' rows={4} />
    </FieldWrapper>
  )
}

export default TextArea
