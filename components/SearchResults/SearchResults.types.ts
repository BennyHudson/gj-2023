interface SearchResult {
  url: string
  title: string
}

export interface SearchResultsProps {
  searchResults: SearchResult[]
  searchTerm: string
  setSearchResults: (searchResults: SearchResult[]) => void
}
