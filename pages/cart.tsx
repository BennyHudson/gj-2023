import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import Cart from '@components/Cart'
import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import client from '@lib/apollo-client'


import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { PageData } from '@typings/PageData.types'

const CartPage: FC<PageData> = ({ headerNav, footerNav, siteOptions }: PageData): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout
      headerStyle='standard'
      headerNav={headerNav}
      footerNav={footerNav}
      seo={{ title: 'Cart | The Gentleman\'s Journal' }}
      siteOptions={siteOptions}
    >
      <SplitPageTemplate image={featuredImageUrl(siteOptions.gjOptions.splitPageImages.cartPage.fullSize)} title='Cart'>
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
      siteOptions: siteOptions.data,
    },
  }
}
