import type { Article } from '@queries/fragments/articleContent'
import type { HouseNote } from '@queries/fragments/houseNoteContent'
import type { Podcast } from '@queries/fragments/podcastContent'
import type { Post } from '@queries/fragments/postContent'

export interface PostExcerptProps {
  post: Article | Post | Podcast | HouseNote
  inverse?: boolean
  priority?: boolean
}
