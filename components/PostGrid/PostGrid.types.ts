import type { Article } from '@queries/fragments/articleContent'
import type { HouseNote } from '@queries/fragments/houseNoteContent'
import type { Podcast } from '@queries/fragments/podcastContent'
import type { Post } from '@queries/fragments/postContent'

export interface PostGridProps {
  columns?: 3 | 4
  posts: Article[] | Post[] | Podcast[] | HouseNote[]
  inverse?: boolean
  priority?: boolean
  smCarousel?: boolean
  showAdvert?: boolean
}
