import type { Podcast } from '@typings/Podcast.types'

export interface PodcastListProps {
  podcasts: {
    node: Podcast
  }[]
}
