import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { SectionProps } from '../Section.types'

export interface StyledSectionProps {
  theme: Theme
  appearance: SectionProps['appearance']
  containerWidth: SectionProps['containerWidth']
  backgroundImage: string
  textAlign: SectionProps['textAlign']
}
