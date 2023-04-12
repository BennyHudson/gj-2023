import type { Theme } from '@themes/gjTheme/gjTheme.types'

export interface StyledFeatureCarouselProps {
  theme: Theme
  activeIndex: number
  $isActive: boolean
  count: number
  headerHeight: number
  height: 1 | 2
}
