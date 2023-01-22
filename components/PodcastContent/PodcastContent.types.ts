import { Podcast } from '@queries/fragments/podcastContent'
import { PodcastOptions } from '@queries/podcasts/podcast-options'

export interface PodcastContentProps extends Podcast, PodcastOptions {
  content: string
  sponsor?: string
}
