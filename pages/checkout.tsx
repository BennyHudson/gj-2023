import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import PageLayout from '@components/layout/PageLayout'
import SplitPageTemplate from '@components/layout/SplitPageTemplate'

import PageContext, { PageContextProps } from '@context/PageContext'
import Checkout from '@components/Checkout'

const CheckoutPage: FC = ({ headerNav, footerNav }): ReactElement => {
  const { token, setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])
  
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <SplitPageTemplate image='https://www.thegentlemansjournal.com/wp-content/uploads/2019/09/ryan-reynolds-gentlemans-journal-aviation-gin-1.jpg'>
        <Checkout />
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default CheckoutPage

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