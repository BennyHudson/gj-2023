import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/layout/PageLayout'
import SplitPageTemplate from '@components/layout/SplitPageTemplate'

import SearchForm from '@components/search/SearchForm'

import PageContext, { PageContextProps } from '@context/PageContext'

const SearchPage: FC = ({ headerNav, footerNav }): ReactElement => {
  const { token, setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])
  
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <SplitPageTemplate image='https://www.thegentlemansjournal.com/wp-content/uploads/2022/12/209490030008-2502x1200-c-center.jpg' title='Search'>
        <SearchForm />
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default SearchPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
    }
  }
}