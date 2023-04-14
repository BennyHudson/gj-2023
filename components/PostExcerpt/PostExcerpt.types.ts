import type { HouseNote } from '@queries/fragments/houseNoteContent'
import type { Podcast } from '@queries/fragments/podcastContent'
import type { Post } from '@queries/fragments/postContent'

export interface PostExcerptProps extends Post, Podcast, HouseNote {
  inverse: boolean
  priority: boolean
}
