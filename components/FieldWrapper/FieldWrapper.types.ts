import type { ReactNode } from 'react'

import type { FormFieldProps } from '@typings/FormField.types'

export interface FieldWrapperProps extends FormFieldProps {
  children: ReactNode
  required?: boolean
}
