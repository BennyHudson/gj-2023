import React, { ReactNode } from 'react'

interface SearchResult {
  url: string
  title: string
}

interface FeaturedImage {
  featuredImageDatabaseId: number
  url: string
}

export interface PageContextProps {
  cmsUrl: string
  apiUrl: string
  activeNavElement: number
  setActiveNavElement: (navElement: number) => void
  headerHeight: number
  setHeaderHeight: (headerHeight: number) => void
  showModal: ReactNode
  setShowModal: (showSearchModal?: ReactNode) => void
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  searchResults: SearchResult[]
  setSearchResults: (results: SearchResult[]) => void
  searchPage: number
  setSearchPage: (searchPage: number) => void
  navLoaded: boolean
  setNavLoaded: (navLoaded: boolean) => void
}

export default React.createContext<Partial<PageContextProps>>({})
