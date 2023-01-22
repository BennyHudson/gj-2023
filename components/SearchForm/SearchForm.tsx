import React, { ReactElement, FC, useState, useContext } from 'react'
import { Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faSpinner } from '@fortawesome/pro-thin-svg-icons'

import SearchResults from '@components/SearchResults'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/SearchForm.style'

const SearchForm: FC = (): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [ searchResults, setSearchResults ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState()
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
            <Styled.Label htmlFor="searchTerm">Enter Search Term</Styled.Label>
            <Styled.TextField id="searchTerm" name='searchTerm' loading={loading} placeholder='Enter Search Term' />
            <Styled.Submit type='submit' loading={loading}>
              {loading ? 
                <FontAwesomeIcon icon={faSpinner as IconProp} spin />
                :
                <FontAwesomeIcon icon={faArrowRight as IconProp} />
              }
            </Styled.Submit>
          </Styled.SearchForm>
        )}
      </Formik>

      {searchTerm && searchResults.length > 0 &&
        <SearchResults
          searchResults={searchResults}
          searchTerm={searchTerm}
          setSearchResults={setSearchResults}
        />
      }
    </Styled.SearchWrapper>
  )
}

export default SearchForm
