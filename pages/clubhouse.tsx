import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'
import ClubhouseGateway from '@components/ClubhouseGateway'
import MyAccount from '@components/MyAccount'

import PageContext, { PageContextProps } from '@context/PageContext'
import { freeGiftQuery } from '@queries/global/free-gift'
import featuredImageUrl from '@helpers/featuredImageUrl'
import { siteOptionsQuery } from '@queries/global/site-options'

const ClubPage: FC = ({ headerNav, footerNav, subscriptionProducts, freeGift, siteOptions }): ReactElement => {
  const { token, setActiveNavElement, customer } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerStyle='standard' headerNav={headerNav} footerNav={footerNav} seo={{ title: 'Clubhouse | The Gentleman\'s Journal' }} siteOptions={siteOptions}>
      <SplitPageTemplate image={featuredImageUrl(siteOptions.gjOptions.splitPageImages.accountPage.sourceUrl)}>
        {token && customer ? <MyAccount /> : <ClubhouseGateway products={subscriptionProducts} freeGift={freeGift} />}
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default ClubPage

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
      freeGift: freeGift.data.products.nodes[0],
      siteOptions: siteOptions.data,
    },
  }
}
