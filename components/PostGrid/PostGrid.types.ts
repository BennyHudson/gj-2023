import type { Podcast } from '@typings/Podcast.types'
import type { Post } from '@typings/Post.types'

export interface PostGridProps {
  columns?: 3 | 4
  posts: Post[] | Podcast[]
  inverse?: boolean
  priority?: boolean
  smCarousel?: boolean
  showAdvert?: boolean
}
