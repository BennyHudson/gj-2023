import { Breakpoints } from './constants/breakpoints.types'
import { Colours } from './constants/colours.types'
import { Spacing } from './constants/spacing.types'
import { Typography } from './constants/typography.types'

export interface Theme {
  spacing: Spacing
  breakpoints: Breakpoints
  colours: Colours
  typography: Typography
  containerWidth: number
}
