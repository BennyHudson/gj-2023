import { Post } from '@typings/Post.types'

export interface PostCarouselProps {
  posts: {
    node: Post
  }[]
}
