import spacing from './constants/spacing'
import breakpoints from './constants/breakpoints'
import colours from './constants/colours'
import typography from './constants/typography'

import { Theme } from './gjTheme.types'

const gjTheme: Theme = {
  spacing: spacing,
  breakpoints: breakpoints,
  colours: colours,
  typography: typography,
  containerWidth: 1296,
}

export { gjTheme }
