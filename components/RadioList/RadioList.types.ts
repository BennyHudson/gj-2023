import type { FormFieldProps } from '@typings/FormField.types'

export interface RadioListProps extends FormFieldProps {
  choices: {
    value: string | number
    text: string
  }[]
}
