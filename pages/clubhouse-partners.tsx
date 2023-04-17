import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import HeroImage from '@components/HeroImage'
import Masthead from '@components/Masthead'
import PageLayout from '@components/PageLayout'
import PartnerGrid from '@components/PartnerGrid'
import Section from '@components/Section'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import client from '@lib/apollo-client'


import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { PartnerOptions } from '@queries/partners/partnerOptions'
import { partnerOptionsQuery } from '@queries/partners/partnerOptions'
import type { Partner } from '@queries/partners/partners'
import { partnerQuery } from '@queries/partners/partners'
import type { PageData } from '@typings/PageData.types'

interface TeamPageProps extends PageData {
  partners: Partner[]
  pageData: PartnerOptions
}

const TeamPage: FC<TeamPageProps> = ({ headerNav, footerNav, pageData, partners, siteOptions }: TeamPageProps): ReactElement => {
  const breadcrumbs = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Clubhouse Partners',
      url: '/clubhouse-partners',
    },
  ]

  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout
      headerNav={headerNav}
      footerNav={footerNav}
      seo={{ title: 'Partner Offers | The Gentleman\'s Journal' }}
      siteOptions={siteOptions}
    >
      <HeroImage featuredImage={pageData.featuredImage.fullSize} height={1} />
      <Section appearance='tertiary'>
        <Masthead breadcrumbs={breadcrumbs} title='Clubhouse Partners' subtitle={pageData.subTitle} />
        <PartnerGrid partners={partners} />
      </Section>
    </PageLayout>
  )
}

export default TeamPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const pageData = await client.query(partnerOptionsQuery)
  const partners = await client.query(partnerQuery(500))

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      pageData: pageData.data.clubhousePartnersOptions.clubhousePartnersOptions.clubhousePartnerArchive,
      partners: partners.data.partners.nodes,
    },
    revalidate: 60,
  }
}
