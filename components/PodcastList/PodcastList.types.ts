import type { Podcast } from '@queries/fragments/podcastContent'

export interface PodcastListState {
  allPodcasts: {
    node: Podcast
  }[]
  morePodcasts: boolean
  last: string
}
