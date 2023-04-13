export interface FormFieldProps {
  target: number | string
  label: string
  isRequired?: boolean
  id: number | string
  databaseId?: number
  placeholder?: string
  hideLabels?: boolean
  type?:
    | 'password'
    | 'email'
    | 'telephone'
    | 'number'
    | 'TEXT'
    | 'EMAIL'
    | 'TEXTAREA'
    | 'SELECT'
    | 'CHECKBOX'
    | 'RADIO'
    | 'NAME'
    | 'CONSENT'
  validationMessage?: string
  labelPlacement?: 'TOP' | 'HIDDEN' | 'BOTTOM'
  description?: string
  choices?: {
    value: string | number
    text: string
  }[]
  name?: string
  checkboxLabel?: string
  inputs?: FormFieldProps[]
}
