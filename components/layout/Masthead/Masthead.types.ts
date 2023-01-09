import { BreadcrumbsProps } from '@components/typography/Breadcrumbs/Breadcrumbs.types'

export interface MastheadProps {
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbsProps['links']
  fullWidth?: boolean
  author?: string
}
