import React, { ReactElement, FC, useContext, useState } from 'react'
import he from 'he'

import Link from '@components/Link'
import LoadMore from '@components/LoadMore'
import Heading from '@components/Heading'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/SearchResults.style'

import { SearchResultsProps } from './SearchResults.types'

const SearchResults: FC<SearchResultsProps> = ({ searchResults, searchTerm, setSearchResults }: SearchResultsProps): ReactElement => {
  const [searchPage, setSearchPage] = useState(1)
  const { cmsUrl, apiUrl } = useContext(PageContext) as PageContextProps

  const moreResults = async () => {
    const search = await fetch(`${apiUrl}/search?search=${searchTerm}&page=${searchPage + 1}`)
    const results = await search.json()
    setSearchResults([...searchResults, ...results])
    setSearchPage(searchPage + 1)
  }

  return (
    <>
      {searchResults.length ? (
        <>
          <Heading text={`Showing results for '${searchTerm}'`} size={2} font='ChronicleCondensed' />
          <Styled.SearchResults>
            {searchResults.map((result, index) => {
              return (
                <Styled.Result key={index}>
                  <Link to={result.url.replace('www.', '').replace(cmsUrl, '')} size={2} font='Cera' weight={1}>
                    {he.decode(result.title)}
                  </Link>
                </Styled.Result>
              )
            })}
          </Styled.SearchResults>
          {searchResults.length % 10 === 0 && <LoadMore onClick={moreResults} />}
        </>
      ) : (
        <>
          <Heading text={`Sorry, we couldn't find any results for '${searchTerm}'.`} size={4} font='ChronicleCondensed' noMargin />
          <Heading text='Please try another search term.' size={2} font='ChronicleCondensed' />
        </>
      )}
    </>
  )
}

export default SearchResults
