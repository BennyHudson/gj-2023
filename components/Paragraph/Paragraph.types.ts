import type { ReactNode } from 'react'

import type { ParagraphKeys, WeightKeys } from '@themes/gjTheme/constants/typography.types'

export interface ParagraphProps {
  appearance?: 'primary' | 'secondary'
  children?: ReactNode
  text?: string
  size?: ParagraphKeys
  weight?: WeightKeys
  inverse?: boolean
  font?: 'Cera' | 'Chronicle'
  transform?: 'uppercase' | 'capitalize'
  noMargin?: boolean
}
