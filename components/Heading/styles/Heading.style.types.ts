import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { HeadingProps } from '../Heading.types'

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
  state: HeadingProps['state']
}
