import type { ParagraphKeys, WeightKeys } from '@themes/gjTheme/constants/typography.types'
import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { LinkProps } from '../Link.types'

export interface StyledLinkProps {
  theme: Theme
  size: ParagraphKeys
  weight: WeightKeys
  $inverse: boolean
  font: LinkProps['font']
  transform: LinkProps['transform']
  $showIcon: boolean
  appearance: LinkProps['appearance']
}
