import { FormFieldProps } from '@typings/FormField.types'
import { ReactNode } from 'react'

export interface FieldWrapperProps extends FormFieldProps {
  children: ReactNode
  required?: boolean
}
