import type { Article } from '@queries/fragments/articleContent'
import type { Post } from '@queries/fragments/postContent'

export interface SessionsFeatureProps {
  content: string
  post: Post | Article
}
