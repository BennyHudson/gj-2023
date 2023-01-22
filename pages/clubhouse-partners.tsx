import React, { FC, ReactElement, useEffect, useContext } from 'react'
import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { pageQuery } from '@queries/pages/page'

import PageLayout from '@components/PageLayout'
import HeroImage from '@components/HeroImage'
import Section from '@components/Section'
import Masthead from '@components/Masthead'

import PageContext, { PageContextProps } from '@context/PageContext'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import JobsList from '@components/JobsList'
import { partnerOptionsQuery } from '@queries/partners/partnerOptions'
import PartnerGrid from '@components/PartnerGrid'
import { partnerQuery } from '@queries/partners/partners'

const TeamPage: FC = ({ 
  headerNav,
  footerNav,
  pageData,
  partners,
}): ReactElement => {
  console.log(pageData)

  const breadcrumbs = [
    {
      text: 'Home',
      url: '/'
    },
    {
      title: 'Clubhouse Partners',
      url: '/clubhouse-partners',
    },
  ]

  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={{ title: 'Partner Offers | The Gentleman\'s Journal'  }}>
      <HeroImage featuredImage={pageData.featuredImage.sourceUrl} height={1} />
      <Section appearance='tertiary'>
        <Masthead
          breadcrumbs={breadcrumbs}
          title='Clubhouse Partners'
          subtitle={pageData.subTitle}
        />
        <PartnerGrid partners={partners} />
      </Section>
    </PageLayout>
  )
}

export default TeamPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const pageData = await client.query(partnerOptionsQuery)
  const partners = await client.query(partnerQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      pageData: pageData.data.clubhousePartnersOptions.clubhousePartnersOptions.clubhousePartnerArchive,
      partners: partners.data.partners.nodes,
    },
    // revalidate: 60,
  }
}
