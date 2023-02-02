import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'
import { gql } from '@apollo/client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import { freeGiftQuery } from '@queries/global/free-gift'

import PageLayout from '@components/PageLayout'
import ClubOverview from '@components/ClubOverview'
import ClubGift from '@components/ClubGift'
import ClubBuy from '@components/ClubBuy'
import ClubPerks from '@components/ClubPerks'
import ClubHero from '@components/ClubHero'

import PageContext, { PageContextProps } from '@context/PageContext'
import { clubQuery } from '@queries/pages/club'
import Section from '@components/Section'

const ClubPage: FC = ({ pageData, headerNav, footerNav, subscriptionProducts, freeGift, subscriptionOverview }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(8)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={pageData.seo}>
      <ClubHero
        title={pageData.title}
        subtitle={pageData.subscriptionPage.club.description}
        featuredImage={pageData.featuredImage.node.sourceUrl}
      />
      <ClubOverview overview={subscriptionOverview} />
      <ClubGift freeGift={freeGift} />
      <ClubBuy products={subscriptionProducts} freeGift={freeGift} offerCode={pageData.subscriptionPage.club.clubhouseOffer} />
      <Section>
        <ClubPerks perks={pageData.subscriptionPage.club.subscriptionPerks} title='Join the club.' subtitle='Scroll to see the perks' />
      </Section>
      <ClubBuy products={subscriptionProducts} offerCode={pageData.subscriptionPage.club.clubhouseOffer} />
    </PageLayout>
  )
}

export default ClubPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const subscriptionProducts = await client.query(subscriptionProductsQuery)
  const freeGift = await client.query(freeGiftQuery)
  const clubPage = await client.query(clubQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      pageData: clubPage.data.page,
      subscriptionProducts: subscriptionProducts.data.products.nodes,
      freeGift: freeGift.data.products.nodes[0],
      subscriptionOverview: clubPage.data.product.subscriptionPerks.subscriptionPerks
    },
  }
}
