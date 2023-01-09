import { Post } from '@typings/Post.types'
import { Podcast } from '@typings/Podcast.types'

export interface PostGridProps {
  columns?: 3 | 4
  posts: Post[] | Podcast[]
  inverse?: boolean
}
