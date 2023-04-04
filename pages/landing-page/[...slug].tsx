import React, { FC, ReactElement, useEffect, useContext } from 'react'
import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { landingPageContentQuery } from '@queries/landingPages/landing-page'
import { partnerQuery } from '@queries/partners/partners'
import { clubQuery } from '@queries/pages/club'

import PageLayout from '@components/PageLayout'
import HeroImage from '@components/HeroImage'
import Section from '@components/Section'
import PartnerGrid from '@components/PartnerGrid'

import PageContext, { PageContextProps } from '@context/PageContext'
import { getAllPosts } from '@lib/api'
import featuredImageUrl from '@helpers/featuredImageUrl'
import Title from '@components/Title/Title'
import ClubPerks from '@components/ClubPerks/ClubPerks'
import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import ClubBuy from '@components/ClubBuy/ClubBuy'
import { freeGiftQuery } from '@queries/global/free-gift'
import Heading from '@components/Heading/Heading'
import Paragraph from '@components/Paragraph'
import { siteOptionsQuery } from '@queries/global/site-options'

const LandingPage: FC = ({ headerNav, footerNav, landingPageContent, partners, club, subscriptionProducts, freeGift, siteOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={{ title: `${landingPageContent.title} | The Gentleman's Journal` }} siteOptions={siteOptions} databaseId={landingPageContent.databaseId}>
      <HeroImage featuredImage={featuredImageUrl(landingPageContent.featuredImage.node.sourceUrl)} height={1} />
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
        <ClubPerks perks={club.subscriptionPerks} title='Join the club.' subtitle='Scroll to see the perks' />
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
      freeGift: freeGift.data.products.nodes[0],
    },
    // revalidate: 60,
  }
}
