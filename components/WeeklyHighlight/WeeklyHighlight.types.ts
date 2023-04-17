import type { Article } from '@queries/fragments/articleContent'
import type { Post } from '@queries/fragments/postContent'

export interface WeeklyHighlightProps extends Article, Post {
  excerpt: string
}
