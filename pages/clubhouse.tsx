import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import ClubhouseGateway from '@components/ClubhouseGateway'
import MyAccount from '@components/MyAccount'
import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import client from '@lib/apollo-client'


import { footerNavQuery } from '@queries/global/footer-nav'
import { freeGiftQuery } from '@queries/global/free-gift'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import type { PageData } from '@typings/PageData.types'
import type { Product } from '@typings/Product.types'

interface ClubhousePageProps extends PageData {
  subscriptionProducts: Product[]
  freeGift?: Product
}

const ClubhousePage: FC<ClubhousePageProps> = ({
  headerNav,
  footerNav,
  subscriptionProducts,
  freeGift,
  siteOptions,
}: ClubhousePageProps): ReactElement => {
  const { token, setActiveNavElement, customer } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout
      headerStyle='standard'
      headerNav={headerNav}
      footerNav={footerNav}
      seo={{ title: 'Clubhouse | The Gentleman\'s Journal' }}
      siteOptions={siteOptions}
    >
      <SplitPageTemplate image={featuredImageUrl(siteOptions.gjOptions.splitPageImages.accountPage.fullSize)}>
        {token && customer ? <MyAccount /> : <ClubhouseGateway products={subscriptionProducts} freeGift={freeGift} />}
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default ClubhousePage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const subscriptionProducts = await client.query(subscriptionProductsQuery)
  const freeGift = await client.query(freeGiftQuery)
  const siteOptions = await client.query(siteOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      subscriptionProducts: subscriptionProducts.data.products.nodes,
      freeGift: freeGift.data.products.nodes.length > 0 && freeGift.data.products.nodes[0],
      siteOptions: siteOptions.data,
    },
  }
}
