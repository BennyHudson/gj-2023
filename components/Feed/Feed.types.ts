import { Post } from '@typings/Post.types'

export interface FeedProps {
  category?: string
}

export interface FeedState {
  last?: string
  allArticles: {
    node: Post
  }[]
  morePosts: boolean
}