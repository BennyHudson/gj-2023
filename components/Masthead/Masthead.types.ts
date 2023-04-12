import type { BreadcrumbsProps } from '@components/Breadcrumbs/Breadcrumbs.types'

export interface MastheadProps {
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbsProps['links']
  fullWidth?: boolean
  author?: string
}
