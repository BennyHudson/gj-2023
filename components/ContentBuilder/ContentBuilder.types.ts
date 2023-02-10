import { ContentBuilder } from '@queries/fragments/contentBuilder'

export interface ContentBuilderProps {
  content: ContentBuilder[]
  prefix: string
  mambersOnly?: boolean
}
