import type { Article } from '@queries/fragments/articleContent'
import type { Post } from '@queries/fragments/postContent'

export interface FeedProps {
  category?: number
  columns?: 3 | 4
  count?: number
  showAdvert?: boolean
}

export interface FeedState {
  last?: string
  allFeedElements: {
    node: Post | Article
  }[]
  moreArticles: boolean
}
