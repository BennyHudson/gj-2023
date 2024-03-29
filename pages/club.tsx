import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import ClubBuy from '@components/ClubBuy'
import ClubGift from '@components/ClubGift'
import ClubHero from '@components/ClubHero'
import ClubOverview from '@components/ClubOverview'
import ClubPerks from '@components/ClubPerks'
import ClubVideo from '@components/ClubVideo'
import PageLayout from '@components/PageLayout'
import Section from '@components/Section'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import client from '@lib/apollo-client'


import { footerNavQuery } from '@queries/global/footer-nav'
import { freeGiftQuery } from '@queries/global/free-gift'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import type { ClubPageData } from '@queries/pages/club'
import { clubQuery } from '@queries/pages/club'
import type { PageData } from '@typings/PageData.types'
import type { Product } from '@typings/Product.types'

interface ClubPageProps extends PageData {
  pageData: ClubPageData
  subscriptionProducts: Product[]
  freeGift?: Product
  subscriptionOverview: {
    subscriptionPerk: string
  }[]
}

const ClubPage: FC<ClubPageProps> = ({
  pageData,
  headerNav,
  footerNav,
  subscriptionProducts,
  freeGift,
  subscriptionOverview,
  siteOptions,
}: ClubPageProps): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(8)
  }, [setActiveNavElement])

  return (
    <PageLayout
      headerStyle='standard'
      headerNav={headerNav}
      footerNav={footerNav}
      seo={pageData.seo}
      siteOptions={siteOptions}
      databaseId={pageData.databaseId}
    >
      <ClubVideo video={pageData.subscriptionPage.club.video.url} poster={pageData.featuredImage.node.fullSize} />
      <ClubHero title={pageData.title} subtitle={pageData.subscriptionPage.club.description} />
      <ClubOverview overview={subscriptionOverview} />
      {freeGift && <ClubGift freeGift={freeGift} />}
      <ClubBuy products={subscriptionProducts} freeGift={freeGift} offerCode={pageData.subscriptionPage.club.clubhouseOffer} />
      <Section>
        <ClubPerks perks={pageData.subscriptionPage.club.subscriptionPerks} title='Join the club.' subtitle='Scroll to see the perks' />
      </Section>
      <ClubBuy products={subscriptionProducts} freeGift={freeGift} offerCode={pageData.subscriptionPage.club.clubhouseOffer} />
    </PageLayout>
  )
}

export default ClubPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const subscriptionProducts = await client.query(subscriptionProductsQuery)
  const freeGift = await client.query(freeGiftQuery)
  const clubPage = await client.query(clubQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      pageData: clubPage.data.page,
      subscriptionProducts: subscriptionProducts.data.products.nodes,
      freeGift: freeGift.data.products.nodes.length > 0 && freeGift.data.products.nodes[0],
      subscriptionOverview: clubPage.data.product.subscriptionPerks.subscriptionPerks,
    },
  }
}
