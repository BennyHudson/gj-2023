import { ReactNode } from 'react'

import { FooterNav } from '@queries/global/footer-nav'
import { HeaderNav } from '@queries/global/header-nav'

export interface PageLayoutProps {
  children: ReactNode
  headerNav: HeaderNav
  footerNav: FooterNav
}