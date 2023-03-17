import React, { FC, ReactElement, useEffect, useContext } from 'react'
import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { magazineCategoryQuery } from '@queries/products/magazine-category'

import PageLayout from '@components/PageLayout'
import Section from '@components/Section'
import Masthead from '@components/Masthead'
import MagazineGrid from '@components/MagazineGrid'

import PageContext, { PageContextProps } from '@context/PageContext'
import { siteOptionsQuery } from '@queries/global/site-options'

const Magazines: FC = ({ headerNav, footerNav, magazineData, siteOptions }): ReactElement => {
  const breadcrumbs = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: magazineData.name,
      url: '/product-category/magazine',
    },
  ]

  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={{ title: `${magazineData.name} | The Gentleman's Journal` }} siteOptions={siteOptions}>
      <Section appearance='tertiary'>
        <Masthead breadcrumbs={breadcrumbs} title={magazineData.name} />
        <MagazineGrid magazines={magazineData.products.edges} />
      </Section>
    </PageLayout>
  )
}

export default Magazines

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const magazineData = await client.query(magazineCategoryQuery())

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      magazineData: magazineData.data.productCategory,
    },
    // revalidate: 60,
  }
}
