import type { FooterNav } from '@queries/global/footer-nav'
import type { HeaderNav } from '@queries/global/header-nav'
import type { SiteOptions } from '@queries/global/site-options'

export interface PageData {
  headerNav: HeaderNav
  footerNav: FooterNav
  siteOptions: SiteOptions
}
