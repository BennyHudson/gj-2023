import { Theme } from '@themes/gjTheme/gjTheme.types'

import { ParagraphKeys, WeightKeys } from '@themes/gjTheme/constants/typography.types'

import { ParagraphProps } from '../Paragraph.types'

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
