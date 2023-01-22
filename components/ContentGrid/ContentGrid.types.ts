import { BylineProps } from '@components/Byline/Byline.types'
import { ArticleNote } from '@queries/fragments/articleNote'
import { ContentBuilder } from '@queries/fragments/contentBuilder'

export interface ContentGridProps {
  byline?: BylineProps
  contentBuilder?: ContentBuilder[]
  contentBuilderPrefix: string
  articleNote: ArticleNote
}
