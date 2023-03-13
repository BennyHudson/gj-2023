import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'
import SearchForm from '@components/SearchForm'

import PageContext, { PageContextProps } from '@context/PageContext'

const SearchPage: FC = ({ headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} headerStyle='standard' footerNav={footerNav} seo={{ title: 'Search | The Gentleman\'s Journal' }}>
      <SplitPageTemplate
        image='https://cdn.cms.thegentlemansjournal.com/wp-content/uploads/2022/12/209490030008-2502x1200-c-center.jpg'
        title='Search'
      >
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
    },
  }
}
