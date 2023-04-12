import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { FieldWrapperProps } from '../FieldWrapper.types'

export interface StyledFieldWrapperProps {
  theme: Theme
  labelPlacement: FieldWrapperProps['labelPlacement']
  validationMessage: boolean
}
