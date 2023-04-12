import type { ReactNode } from 'react'

import type { FooterNav } from '@queries/global/footer-nav'
import type { HeaderNav } from '@queries/global/header-nav'

export interface PageLayoutProps {
  children: ReactNode
  headerNav: HeaderNav
  footerNav: FooterNav
  headerStyle: 'feature' | 'standard'
  databaseId?: number
}
