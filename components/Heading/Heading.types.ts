import type { ReactNode } from 'react'

import type { HeadingKeys, WeightKeys } from '@themes/gjTheme/constants/typography.types'

export interface HeadingProps {
  appearance?: 'primary' | 'secondary'
  text: string | string[]
  level?: 1 | 2 | 3 | 4 | 5
  size?: HeadingKeys
  noMargin?: boolean
  inverse?: boolean
  weight?: WeightKeys
  font?: 'Cera' | 'Chronicle' | 'ChronicleCondensed'
  transform?: 'uppercase'
  state?: 'error'
  children?: ReactNode
}
