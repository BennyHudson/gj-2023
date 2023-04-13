import type { FormFieldProps } from '@typings/FormField.types'

export interface SelectProps extends FormFieldProps {
  choices: {
    value: string | number
    text: string
  }[]
}
