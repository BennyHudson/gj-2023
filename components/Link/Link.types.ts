import type { ParagraphProps } from '@components/Paragraph/Paragraph.types'

export interface LinkProps extends ParagraphProps {
  to?: string
  href?: string
  showIcon?: boolean
  inverse?: boolean
}
