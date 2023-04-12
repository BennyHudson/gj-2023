import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { ValueWithLabelProps } from '../ValueWithLabel.types'

export interface StyledValueWithLabelProps {
  theme: Theme
  valueType: ValueWithLabelProps['valueType']
  transform: ValueWithLabelProps['transform']
}
