import { Theme } from '@themes/gjTheme/gjTheme.types'

import { HeaderProps } from '../Header.types'

export interface StyledHeaderProps {
  theme: Theme
  transparent: boolean
  headerStyle: HeaderProps['headerStyle']
  overrideHeaderStyle: boolean
  searchResults: boolean
  fixed: boolean
  topPosition: number
}
