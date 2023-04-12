import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { NameFieldProps } from '../NameField.types'

export interface StyledNameFieldProps {
  theme: Theme
  split: NameFieldProps['split']
  columnCount: number
}
