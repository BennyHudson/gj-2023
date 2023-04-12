import type { Post } from '@typings/Post.types'

export interface PostExcerptProps extends Post {
  inverse?: boolean
  priority?: boolean
}
