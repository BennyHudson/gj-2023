import type { Theme } from '@themes/gjTheme/gjTheme.types'

export interface StyledHeroImageProps {
  theme: Theme
  height: 1 | 2
  headerHeight: number
  backgroundImage: string
  hasVideo: boolean
}
