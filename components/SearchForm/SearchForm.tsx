import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faSpinner } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik } from 'formik'
import type { FC, ReactElement } from 'react'
import React, { useContext, useState } from 'react'

import SearchResults from '@components/SearchResults'
import type { SearchResult } from '@components/SearchResults/SearchResults.types'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import * as Styled from './styles/SearchForm.style'

const SearchForm: FC = (): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [searchTerm, setSearchTerm] = useState()
  const { apiUrl } = useContext(PageContext) as PageContextProps

  return (
    <Styled.SearchWrapper>
      <Formik
        initialValues={{
          searchTerm,
        }}
        onSubmit={async (values) => {
          setLoading(true)
          const search = await fetch(`${apiUrl}/search?search=${values.searchTerm}`)
          const results = await search.json()
          setLoading(false)
          setSearchResults(results)
          setSearchTerm(values.searchTerm)
        }}
      >
        {() => (
          <Styled.SearchForm>
            <Styled.Label htmlFor='searchTerm'>Enter Search Term</Styled.Label>
            <Styled.TextField id='searchTerm' name='searchTerm' loading={loading} placeholder='Enter Search Term' />
            <Styled.Submit type='submit' loading={loading}>
              {loading ? <FontAwesomeIcon icon={faSpinner as IconProp} spin /> : <FontAwesomeIcon icon={faArrowRight as IconProp} />}
            </Styled.Submit>
          </Styled.SearchForm>
        )}
      </Formik>

      {searchTerm && searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} searchTerm={searchTerm} setSearchResults={setSearchResults} />
      )}
    </Styled.SearchWrapper>
  )
}

export default SearchForm
