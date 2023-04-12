import type { FC, ReactElement} from 'react'
import React, { useContext, useEffect } from 'react'

import PageLayout from '@components/PageLayout'
import SearchForm from '@components/SearchForm'
import SplitPageTemplate from '@components/SplitPageTemplate'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import client from '@lib/apollo-client'

import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'

const SearchPage: FC = ({ headerNav, footerNav, siteOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout
      headerNav={headerNav}
      headerStyle='standard'
      footerNav={footerNav}
      seo={{ title: 'Search | The Gentleman\'s Journal' }}
      siteOptions={siteOptions}
    >
      <SplitPageTemplate image={featuredImageUrl(siteOptions.gjOptions.splitPageImages.searchPage.sourceUrl)} title='Search'>
        <SearchForm />
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default SearchPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
    },
  }
}
