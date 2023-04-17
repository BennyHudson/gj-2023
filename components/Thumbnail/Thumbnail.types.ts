import type { Article } from '@queries/fragments/articleContent'
import type { Post } from '@queries/fragments/postContent'

export interface ThumbnailProps {
  type?: 'rectangle' | 'circle' | 'square'
  to?: string
  size?: 1 | 2 | 3 | 4
  requestThumbnail?: boolean
  showTitle?: boolean
  title?: Post['title'] | Article['title']
  categories?: Post['categories'] | Article['categories']
  date?: Post['date'] | Article['date']
  featuredImage?: string
  priority?: boolean
  href?: string
  contain?: boolean
}
