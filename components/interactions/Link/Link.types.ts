import { ParagraphProps } from '@components/typography/Paragraph/Paragraph.types'

export interface LinkProps extends ParagraphProps {
  to?: string
  href?: string
  showIcon?: boolean
  inverse?: boolean
}
