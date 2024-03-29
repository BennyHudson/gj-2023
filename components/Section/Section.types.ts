import type { ReactNode } from 'react'

export interface SectionProps {
  children: ReactNode
  appearance?: 'primary' | 'secondary' | 'tertiary'
  containerWidth?: 'regular' | 'narrow' | 'wide'
  backgroundImage?: string
  paddingLevel?: 1 | 2
  textAlign?: 'left' | 'center'
}
