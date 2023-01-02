import React, { ReactNode } from 'react'

interface SearchResult {
  url: string
  title: string
}

interface FeaturedImage {
  featuredImageDatabaseId: number
  url: string
}

export interface PageContextType {
  cmsUrl: string
  apiUrl: string
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
  featuredImages: FeaturedImage[]
  setFeaturedImages: (featuredImages: FeaturedImage[]) => void
}

export default React.createContext<Partial<PageContextType>>({})
