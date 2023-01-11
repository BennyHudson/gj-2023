import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/layout/PageLayout'
import SplitPageTemplate from '@components/layout/SplitPageTemplate'
import ClubhouseGateway from '@components/clubhouse/ClubhouseGateway'
import MyAccount from '@components/clubhouse/MyAccount'

import PageContext, { PageContextProps } from '@context/PageContext'
import { freeGiftQuery } from '@queries/global/free-gift'

const ClubPage: FC = ({ headerNav, footerNav, subscriptionProducts, freeGift }): ReactElement => {
  const { token, setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])
  
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <SplitPageTemplate image='https://www.thegentlemansjournal.com/wp-content/uploads/2022/12/John-Boyega-5-1.jpg'>
        {token ?
          <MyAccount />
          :
          <ClubhouseGateway
            products={subscriptionProducts}
            freeGift={freeGift}
          />
        }
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

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      subscriptionProducts: subscriptionProducts.data.products.nodes,
      freeGift: freeGift.data.products.nodes[0],
    }
  }
}