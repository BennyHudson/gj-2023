import React, { ReactElement, FC, useState, useContext, useEffect } from 'react'
// import { navigate } from 'gatsby'
import { Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSpinner } from '@fortawesome/pro-light-svg-icons'

import PageContext, { PageContextType } from '@context/PageContext'

import * as Styled from './styles/SearchForm.style'

const SearchForm: FC = (): ReactElement => {
  const [loading, setLoading] = useState(false)
  const { searchTerm, setSearchTerm, apiUrl, setSearchResults, setShowModal, searchResults } = useContext(PageContext) as PageContextType

  useEffect(() => {
    // navigate('/search')
  }, [searchResults])

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
          setShowModal(null)
          setSearchTerm(values.searchTerm)     
        }}
      >
        {() => (
          <Styled.SearchForm>
            <Styled.Label htmlFor="searchTerm">Enter Search Term</Styled.Label>
            <Styled.TextField id="searchTerm" name='searchTerm' loading={loading} placeholder='Enter Search Term' />
            <Styled.Submit type='submit' loading={loading}>
              {loading ? 
                <FontAwesomeIcon icon={faSpinner} spin />
                :
                <FontAwesomeIcon icon={faArrowRight} />
              }
            </Styled.Submit>
          </Styled.SearchForm>
        )}
      </Formik>
    </Styled.SearchWrapper>
  )
}

export default SearchForm
