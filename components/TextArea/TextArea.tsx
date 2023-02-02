import React, { ReactElement, FC } from 'react'
import { Field } from 'formik'

import FieldWrapper from '../FieldWrapper'

import { FormFieldProps } from '@typings/FormField.types'

const TextArea: FC<FormFieldProps> = ({ target, label, isRequired, id, databaseId, labelPlacement, placeholder, validationMessage }: FormFieldProps): ReactElement => {
  return (
    <FieldWrapper target={typeof id === 'number' ? `input_${id}` : id} label={label} required={isRequired} labelPlacement={labelPlacement} validationMessage={validationMessage}>
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
