import type { ReactNode } from 'react'

import type { Seo } from '@queries/fragments/seo'
import type { FooterNav } from '@queries/global/footer-nav'
import type { HeaderNav } from '@queries/global/header-nav'
import type { SiteOptions } from '@queries/global/site-options'

export interface PageLayoutProps {
  children: ReactNode
  headerNav: HeaderNav
  footerNav: FooterNav
  headerStyle?: 'feature' | 'standard'
  databaseId?: number
  siteOptions: SiteOptions
  seo: Seo
}
