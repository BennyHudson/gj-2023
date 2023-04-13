import type { BylineProps } from '@components/Byline/Byline.types'

import type { ArticleNote } from '@queries/fragments/articleNote'
import type { ContentBuilder } from '@queries/fragments/contentBuilder'

export interface ContentGridProps {
  byline?: BylineProps
  contentBuilder?: {
    content: ContentBuilder[]
    membersOnly?: boolean
    prefix: string
  }
  contentBuilderPrefix: string
  articleNote: ArticleNote
  content?: string
}
