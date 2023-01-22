import { Theme } from '@themes/gjTheme/gjTheme.types'

import { ImageBlockProps } from '../ImageBlock.types'

export interface StyledImageBlockProps {
  theme: Theme
  imageSize: ImageBlockProps['imageSize']
}
