import type { SelectProps } from '@components/Select/Select.types'

import type { FormFieldProps } from '@typings/FormField.types'

interface NameInput extends FormFieldProps {
  isHidden?: boolean
  choices?: SelectProps['choices']
  name?: string
}

export interface NameFieldProps {
  inputs: NameInput[]
  label: string
  validationMessage?: string
  split?: '2/1' | 'even'
  target: FormFieldProps['target']
  id: FormFieldProps['id']
  databaseId?: FormFieldProps['databaseId']
}
