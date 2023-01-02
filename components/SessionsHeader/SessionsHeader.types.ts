import { Post } from '@typings/Post.types'

export interface SessionsHeaderProps {
  featuredArticle: Post
  secondaryArticles: {
    nodes: Post[]
  }
  tertiaryArticles: {
    nodes: Post[]
  }
}
