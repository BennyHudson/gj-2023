import { HeaderNav } from '@queries/global/header-nav'

export interface HeaderProps {
  headerStyle?: 'feature' | 'standard'
  headerNav: HeaderNav
}

export interface HeaderState {
  transparent: boolean
}