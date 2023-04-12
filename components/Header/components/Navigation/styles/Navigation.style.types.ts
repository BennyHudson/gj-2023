import type { Theme } from '@themes/gjTheme/gjTheme.types'

export interface StyledNavigationProps {
  theme: Theme
  $inverse: boolean
  $isActive: boolean
  $feature: boolean
  subListCount: number
}
