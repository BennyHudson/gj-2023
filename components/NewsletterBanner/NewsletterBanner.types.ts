import type { NewsletterProps } from '@components/Newsletter/Newsletter.types'

export interface NewsletterBannerProps {
  form: NewsletterProps['form']
  backgroundImage: string
  size?: 1 | 2
}