export interface FormFieldProps {
  target: number
  label: string
  isRequired: boolean
  id: number
  databaseId?: number
  placeholder?: string
  hideLabels?: boolean
  type?: 'password'
}