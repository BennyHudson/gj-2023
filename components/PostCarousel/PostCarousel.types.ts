export interface PostCarouselState {
  posts: {
    featured_media: number
    slug: string
    title: {
      rendered: string
    }
  }[]
}
