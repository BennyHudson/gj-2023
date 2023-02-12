import { Post } from '@typings/Post.types'

export interface FeedProps {
  category?: string
  columns?: 3 | 4
  count?: number
  showAdvert?: boolean
}

export interface FeedState {
  last?: string
  allArticles: {
    node: Post
  }[]
  morePosts: boolean
}
