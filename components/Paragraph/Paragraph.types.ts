import { ReactNode } from 'react'

import { ParagraphKeys, WeightKeys } from '@themes/gjTheme/constants/typography.types'

export interface ParagraphProps {
  appearance?: 'primary' | 'secondary'
  children?: ReactNode
  text?: string
  size?: ParagraphKeys
  weight?: WeightKeys
  inverse?: boolean
  font?: 'Cera' | 'Chronicle'
  transform?: 'uppercase'
  noMargin?: boolean
}
