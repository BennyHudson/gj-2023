import type { FormFieldProps } from '@typings/FormField.types'

export interface CheckboxListProps extends FormFieldProps {
  choices: {
    value: string | number
    text: string
  }[]
}
