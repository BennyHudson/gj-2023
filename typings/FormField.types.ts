export interface FormFieldProps {
  target: number | string
  label: string
  isRequired?: boolean
  id: number | string
  databaseId?: number
  placeholder?: string
  hideLabels?: boolean
  type?: 'password' | 'email' | 'telephone' | 'number'
}