import { Post } from '@typings/Post.types'
import { Podcast } from '@typings/Podcast.types'

interface PostProps extends Post {
  subtitle?: string
  meta?: string
}

interface PodcastProps extends Podcast {
  subtitle?: string
  meta?: string
  categories?: {
    nodes: {
      name: string
      uri: string
    }[]
  }
}

export interface FeatureCarouselProps {
  height?: 1 |  2
  title?: string
  links?: {
    text: string
    url: string
    showIcon?: boolean
  }[]
  cta: string
  posts: PostProps[] | PodcastProps[]
}
