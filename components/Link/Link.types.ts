import { ParagraphProps } from '@components/Paragraph/Paragraph.types'

export interface LinkProps extends ParagraphProps {
  to: string
  showIcon?: boolean
  $inverse: boolean
}
