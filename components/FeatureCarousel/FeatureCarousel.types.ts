import type { Article } from '@queries/fragments/articleContent'
import type { Podcast } from '@queries/fragments/podcastContent'
import type { Post } from '@queries/fragments/postContent'

export interface PostProps extends Post, Article {
  subtitle?: string
  meta?: string
}

export interface PodcastProps extends Podcast {
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
  height?: 1 | 2
  title?: string
  links?: {
    text: string
    url: string
    showIcon?: boolean
  }[]
  cta: string
  posts: PostProps[] | PodcastProps[]
  priority?: boolean
}
