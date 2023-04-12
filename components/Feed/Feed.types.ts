import type { Post } from '@typings/Post.types'

export interface FeedProps {
  category?: number
  columns?: 3 | 4
  count?: number
  showAdvert?: boolean
}

export interface FeedState {
  last?: string
  allFeedElements: {
    node: Post
  }[]
  moreArticles: boolean
}
