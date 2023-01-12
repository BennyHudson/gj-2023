import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/layout/PageLayout'
import SplitPageTemplate from '@components/layout/SplitPageTemplate'

import PageContext, { PageContextProps } from '@context/PageContext'
import Cart from '@components/cart/Cart'

const CartPage: FC = ({ headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])
  
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <SplitPageTemplate image='https://www.thegentlemansjournal.com/wp-content/uploads/2022/06/Tom-Hiddleston-Gentlemans-Journal-Cover-Mobile-Header.jpg' title='Cart'>
        <Cart />
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default CartPage

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