import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { ImageBlockProps } from '../ImageBlock.types'

export interface StyledImageBlockProps {
  theme: Theme
  imageSize: ImageBlockProps['imageSize']
}
