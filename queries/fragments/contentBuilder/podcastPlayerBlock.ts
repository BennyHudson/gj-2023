import { Podcast } from '../podcastContent'

export interface PodcastPlayerBlock {
  [P: string]: {
    fieldGroupName: string
    title: string
    source: Podcast
  }
}

export const podcastPlayerBlock = (postType: string): string => {
  return `... on ${postType}_Articleacf_ContentBuilder_PodcastPlayer {
    fieldGroupName
    title
    source {
      ... on Podcast {
        id
        podcasts {
          podcastMeta {
            media {
              audio
            }
            guest {
              name
              about
            }
          }
        }
      }
    }
  }`
}