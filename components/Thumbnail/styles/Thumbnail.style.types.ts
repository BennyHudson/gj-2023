import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { ThumbnailProps } from '../Thumbnail.types'

export interface StyledThumbnailProps {
  theme: Theme
  type: ThumbnailProps['type']
  size: ThumbnailProps['size']
  href?: string
  $contain: boolean
}
