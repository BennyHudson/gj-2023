import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'

import PageContext, { PageContextProps } from '@context/PageContext'
import Cart from '@components/Cart'
import { siteOptionsQuery } from '@queries/global/site-options'
import featuredImageUrl from '@helpers/featuredImageUrl'

const CartPage: FC = ({ headerNav, footerNav, siteOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerStyle='standard' headerNav={headerNav} footerNav={footerNav} seo={{ title: 'Cart | The Gentleman\'s Journal' }} siteOptions={siteOptions}>
      <SplitPageTemplate
        image={featuredImageUrl(siteOptions.gjOptions.splitPageImages.cartPage.sourceUrl)}
        title='Cart'
      >
        <Cart />
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default CartPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data
    },
  }
}
