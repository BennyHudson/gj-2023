import type { Theme } from '@themes/gjTheme/gjTheme.types'

export interface StyledTabsProps {
  theme: Theme
  $active: boolean
  tabCount: number
}
