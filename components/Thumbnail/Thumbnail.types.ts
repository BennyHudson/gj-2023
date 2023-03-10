import { Post } from '@typings/Post.types'

export interface ThumbnailProps {
  type?: 'rectangle' | 'circle' | 'square'
  to?: string
  size?: 1 | 2 | 3 | 4
  requestThumbnail?: boolean
  showTitle?: boolean
  title?: Post['title']
  categories?: Post['categories']
  date?: Post['date']
  featuredImage?: string
  priority?: boolean
  href?: string
  contain?: boolean
}
