import { Theme } from '@themes/gjTheme/gjTheme.types'

import { HeadingProps } from '../Heading.types'

export interface StyledHeadingProps {
  theme: Theme
  level: HeadingProps['level']
  size: HeadingProps['size']
  noMargin: HeadingProps['noMargin']
  inverse: HeadingProps['inverse']
  weight: HeadingProps['weight']
  font: HeadingProps['font']
  transform: HeadingProps['transform']
  appearance: HeadingProps['appearance']
}
