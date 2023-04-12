import type { Podcast } from '@queries/fragments/podcastContent'

export interface PodcastCarouselProps {
  podcasts: Podcast[]
  title: string
}
