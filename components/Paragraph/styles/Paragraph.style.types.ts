import type { ParagraphKeys, WeightKeys } from '@themes/gjTheme/constants/typography.types'
import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { ParagraphProps } from '../Paragraph.types'

export interface StyledParagraphProps {
  theme: Theme
  size: ParagraphKeys
  weight: WeightKeys
  $inverse: boolean
  font: ParagraphProps['font']
  transform: ParagraphProps['transform']
  appearance: ParagraphProps['appearance']
  noMargin: boolean
}
