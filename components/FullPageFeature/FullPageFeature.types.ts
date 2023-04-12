import type { Post } from '@typings/Post.types'

export interface FullPageFeatureProps extends Post {
  excerpt: string
}

declare global {
  interface EventTarget {
    documentElement: {
      scrollTop: number
    }
  }
}
