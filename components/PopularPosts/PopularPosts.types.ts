export type DateRanges = 'week' | 'month' | 'year'

export interface PopularPostsState {
  dateRange: DateRanges
  popularPosts: {
    link: string
    title: {
      rendered: string
    }
  }[]
}