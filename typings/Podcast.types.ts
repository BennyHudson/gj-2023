export interface Podcast {
  uri: string
  title: string
  date: string
  podcasts: {
    podcastMeta: {
      guest: {
        name: string
        about?: string
      }
    }
  }
  databaseId: number
  featuredImageDatabaseId: number
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
}
