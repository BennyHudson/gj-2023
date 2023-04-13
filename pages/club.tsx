import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import ClubBuy from '@components/ClubBuy'
import ClubGift from '@components/ClubGift'
import ClubHero from '@components/ClubHero'
import ClubOverview from '@components/ClubOverview'
import ClubPerks from '@components/ClubPerks'
import ClubVideo from '@components/ClubVideo'
import PageLayout from '@components/PageLayout'
import PartnerCarousel from '@components/PartnerCarousel/PartnerCarousel'
import Section from '@components/Section'

import Title from '@components/Title/Title'
import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import client from '@lib/apollo-client'

import { footerNavQuery } from '@queries/global/footer-nav'
import { freeGiftQuery } from '@queries/global/free-gift'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import { clubQuery } from '@queries/pages/club'
import { partnerTypesQuery } from '@queries/partners/partnerTypes'

const ClubPage: FC = ({
  pageData,
  headerNav,
  footerNav,
  subscriptionProducts,
  freeGift,
  subscriptionOverview,
  siteOptions,
  partners,
}): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(8)
  }, [setActiveNavElement])

  const partnerCarousels = [
    {
      title: 'Restaurants & Bars Covered In Membership',
      partners: partners.restaurants.partners.nodes,
    },
    {
      title: 'Clubs Covered In Membership',
      partners: partners.clubs.partners.nodes,
    },
    {
      title: 'Hotels Covered In Membership',
      partners: partners.hotels.partners.nodes,
    },
    {
      title: 'Fashion Brands Covered In Membership',
      partners: partners.fashion.partners.nodes,
    },
    {
      title: 'Lifestyle Brands Covered In Membership',
      partners: partners.lifestyle.partners.nodes,
    },
  ]

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
      <Section appearance='secondary'>
        <Title title='Clubs, Bars, Gyms & Restaurant Offers' subtitle='You will receive direct offers and benefits with 68 luxury hotels, clubs, restaurants and handpicked brands' inverse />
        {
          partnerCarousels.map((partnerCarousel, index) => {
            return (
              <PartnerCarousel {...partnerCarousel} key={index} />
            )
          })
        }
      </Section>
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
  const partners = await client.query(partnerTypesQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      pageData: clubPage.data.page,
      subscriptionProducts: subscriptionProducts.data.products.nodes,
      freeGift: freeGift.data.products.nodes.length > 0 && freeGift.data.products.nodes[0],
      subscriptionOverview: clubPage.data.product.subscriptionPerks.subscriptionPerks,
      partners: partners.data,
    },
  }
}
