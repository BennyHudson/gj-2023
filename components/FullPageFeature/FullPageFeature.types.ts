import type { Article } from '@queries/fragments/articleContent'
import type { Post } from '@queries/fragments/postContent'

export interface FullPageFeatureProps extends Post, Article {
  excerpt: string
}

declare global {
  interface EventTarget {
    documentElement: {
      scrollTop: number
    }
  }
}
