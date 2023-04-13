import type { ContentBuilder } from '@queries/fragments/contentBuilder'

export interface ContentBuilderProps {
  content: ContentBuilder[]
  prefix: string
  membersOnly?: boolean
}
