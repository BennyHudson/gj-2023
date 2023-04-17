import { Field } from 'formik'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { FormFieldProps } from '@typings/FormField.types'

import FieldWrapper from '../FieldWrapper'

const TextArea: FC<FormFieldProps> = ({
  label,
  isRequired,
  id,
  databaseId,
  labelPlacement,
  placeholder,
  validationMessage,
}: FormFieldProps): ReactElement => {
  return (
    <FieldWrapper
      target={typeof id === 'number' ? `input_${id}` : id}
      label={label}
      required={isRequired}
      labelPlacement={labelPlacement}
      validationMessage={validationMessage}
      id={id}
    >
      <Field
        className='styled-textarea'
        name={typeof id === 'number' ? `input_${id}` : id}
        id={databaseId ? `input_${databaseId}_${id}` : `input_${id}`}
        placeholder={placeholder}
        as='textarea'
        rows={4}
      />
    </FieldWrapper>
  )
}

export default TextArea
