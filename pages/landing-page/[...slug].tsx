import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import ClubBuy from '@components/ClubBuy/ClubBuy'
import ClubPerks from '@components/ClubPerks/ClubPerks'
import Heading from '@components/Heading/Heading'
import HeroImage from '@components/HeroImage'
import PageLayout from '@components/PageLayout'
import Paragraph from '@components/Paragraph'
import PartnerGrid from '@components/PartnerGrid'
import Section from '@components/Section'
import Title from '@components/Title/Title'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import { getAllPosts } from '@lib/api'
import client from '@lib/apollo-client'

import { footerNavQuery } from '@queries/global/footer-nav'
import { freeGiftQuery } from '@queries/global/free-gift'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import { landingPageContentQuery } from '@queries/landingPages/landing-page'
import { clubQuery } from '@queries/pages/club'
import { partnerQuery } from '@queries/partners/partners'

const LandingPage: FC = ({
  headerNav,
  footerNav,
  landingPageContent,
  partners,
  club,
  subscriptionProducts,
  freeGift,
  siteOptions,
}): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout
      headerNav={headerNav}
      footerNav={footerNav}
      seo={{ title: `${landingPageContent.title} | The Gentleman's Journal` }}
      siteOptions={siteOptions}
      databaseId={landingPageContent.databaseId}
    >
      <HeroImage featuredImage={featuredImageUrl(landingPageContent.featuredImage.node.fullSize)} height={1} />
      <Section appearance='secondary' containerWidth='narrow' textAlign='center'>
        <Heading text={landingPageContent.title} inverse size={5} font='ChronicleCondensed' />
        <Paragraph inverse text={landingPageContent.landingPageContent.redemptionDetails} font='Cera' />
        <Paragraph inverse text={landingPageContent.landingPageContent.redemptionTerms} font='Cera' size={1} />
      </Section>
      <Section appearance='tertiary'>
        <Title title='The membership also includes:' />
        <PartnerGrid partners={partners} />
      </Section>
      <ClubBuy products={subscriptionProducts} freeGift={freeGift} />
      <Section>
        <ClubPerks 
          perks={club.subscriptionPerks} 
          title='Join the club.' 
          subtitle='Scroll to see the perks'
          brands={club.clubhouseBrands}
        />
      </Section>
    </PageLayout>
  )
}

export default LandingPage

export async function getStaticPaths() {
  const allLandingPages = await getAllPosts('landingPage')

  const paths = allLandingPages.map((landingPage) => {
    if (!landingPage) return
    if (!landingPage.node) return
    return {
      params: {
        slug: [landingPage.node.slug],
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ preview = false, params }) {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const landingPageContent = await client.query(landingPageContentQuery(params.slug[0], preview))
  const partners = await client.query(partnerQuery(12))
  const clubPage = await client.query(clubQuery)
  const subscriptionProducts = await client.query(subscriptionProductsQuery)
  const freeGift = await client.query(freeGiftQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      landingPageContent: landingPageContent.data.landingPage,
      partners: partners.data.partners.nodes,
      club: clubPage.data.page.subscriptionPage.club,
      subscriptionProducts: subscriptionProducts.data.products.nodes,
      freeGift: freeGift.data.products.nodes.length > 0 && freeGift.data.products.nodes[0],
    },
    // revalidate: 60,
  }
}
