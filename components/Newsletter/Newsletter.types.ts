import type { FormFieldProps } from '@typings/FormField.types'

export interface NewsletterProps {
  form: {
    title: string
    submitButton: {
      text: string
    }
    formFields: {
      nodes: FormFieldProps[]
    }
  }
  showTitle?: boolean
}
