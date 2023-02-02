import { FC, ReactElement, useContext, useEffect } from 'react'

import client from '@lib/apollo-client'

import { getAllPosts } from '@lib/api'

import { StaticPaths } from '@typings/StaticPaths.types'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { landingPageContentQuery } from '@queries/landingPages/landing-page'
import { clubQuery } from '@queries/pages/club'
import { partnerQuery } from '@queries/partners/partners'
import { subscriptionProductsQuery } from '@queries/global/subscription-products'
import { freeGiftQuery } from '@queries/global/free-gift'

import PageLayout from '@components/PageLayout'
import Section from '@components/Section'
import PartnerGrid from '@components/PartnerGrid'
import ClubHero from '@components/ClubHero'
import Title from '@components/Title'
import ClubPerks from '@components/ClubPerks'
import Paragraph from '@components/Paragraph'
import ClubBuy from '@components/ClubBuy'

import PageContext, { PageContextProps } from '@context/PageContext'

const LandingPage: FC = ({ pageData, headerNav, footerNav, partners, clubContent, subscriptionProducts, freeGift }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={{ title: `${pageData.title} | The Gentleman's Journal` }}>
      <ClubHero
        title={pageData.title}
        subtitle={pageData.landingPageContent.subtitle}
        featuredImage={pageData.featuredImage.node.sourceUrl}
      />
      <Section containerWidth='narrow'>
        <Title title='How to redeem your offer' />
        <Paragraph text={pageData.landingPageContent.redemptionDetails} weight={1} />
        <Paragraph text={pageData.landingPageContent.redemptionTerms} weight={1} size={1} />
      </Section>
      <Section appearance='secondary'>
        <Title title='The membership also includes:' inverse/>
        <PartnerGrid partners={partners} />
      </Section>
      <Section appearance='tertiary'>
        <ClubPerks perks={clubContent.subscriptionPage.club.subscriptionPerks} title='And so much more...' subtitle='Scroll to see the perks' />
      </Section>
      <ClubBuy products={subscriptionProducts} offerCode={clubContent.subscriptionPage.club.clubhouseOffer} freeGift={freeGift} />
    </PageLayout>
  )
}

export default LandingPage

export async function getStaticPaths() {
  const allLandingPages = await getAllPosts('landingPage')

  const paths = allLandingPages.map((article) => {
    if (!article) return
    if (!article.node) return
    return {
      params: {
        slug: [article.node.slug],
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: StaticPaths) {
  const { slug } = params

  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const partners = await client.query(partnerQuery(12))
  const pageData = await client.query(landingPageContentQuery(slug))
  const clubContent = await client.query(clubQuery)
  const subscriptionProducts = await client.query(subscriptionProductsQuery)
  const freeGift = await client.query(freeGiftQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      partners: partners.data.partners.nodes,
      pageData: pageData.data.landingPage,
      clubContent: clubContent.data.page,
      subscriptionProducts: subscriptionProducts.data.products.nodes,
      freeGift: freeGift.data.products.nodes[0],
    },
    // revalidate: 60,
  }
}
