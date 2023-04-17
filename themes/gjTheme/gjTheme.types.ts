import type { Breakpoints } from './constants/breakpoints.types'
import type { Colours } from './constants/colours.types'
import type { Spacing } from './constants/spacing.types'
import type { Typography } from './constants/typography.types'

export interface Theme {
  spacing: Spacing
  breakpoints: Breakpoints
  colours: Colours
  typography: Typography
  containerWidth: number
}
