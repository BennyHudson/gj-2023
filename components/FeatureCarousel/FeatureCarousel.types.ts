import { Post } from '@typings/Post'
import { Podcast } from '@typings/Podcast'

export interface FeatureCarouselProps {
  title?: string
  links?: {
    text: string
    url: string
    showIcon?: boolean
  }[]
  cta: string
  posts: Post[] | Podcast[]
}
