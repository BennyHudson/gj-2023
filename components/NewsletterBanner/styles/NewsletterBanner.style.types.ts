import type { Theme } from '@themes/gjTheme/gjTheme.types'

export interface StyledNewsletterBannerProps {
  theme: Theme
  backgroundImage?: string
  size: 1 | 2
  headerHeight: number
}
