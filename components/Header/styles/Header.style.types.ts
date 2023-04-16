import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { HeaderProps } from '../Header.types'

export interface StyledHeaderProps {
  theme: Theme
  transparent: boolean
  headerStyle: HeaderProps['headerStyle']  
  fixed: boolean
  topPosition: number
  $inverse: boolean
}
