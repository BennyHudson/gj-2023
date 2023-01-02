import { Post } from '@typings/Post.types'

export interface PostGridProps {
  columns?: 3 | 4
  posts: Post[]
  inverse?: boolean
}
