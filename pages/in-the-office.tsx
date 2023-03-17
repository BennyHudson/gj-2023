import React, { FC, ReactElement, useEffect, useContext } from 'react'
import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { pageQuery } from '@queries/pages/page'

import PageLayout from '@components/PageLayout'
import HeroImage from '@components/HeroImage'
import Section from '@components/Section'
import Masthead from '@components/Masthead'
import TeamGrid from '@components/TeamGrid'

import PageContext, { PageContextProps } from '@context/PageContext'
import { siteOptionsQuery } from '@queries/global/site-options'

const TeamPage: FC = ({ headerNav, footerNav, pageData, siteOptions }): ReactElement => {
  const breadcrumbs = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: pageData.title,
      url: pageData.uri,
    },
  ]

  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={pageData.seo} siteOptions={siteOptions}>
      <HeroImage featuredImage={pageData.featuredImage.node.sourceUrl} height={1} />
      <Section>
        <Masthead
          breadcrumbs={breadcrumbs}
          title={pageData.title}
          subtitle={pageData.additionalPageData.subtitleText.replace(/<\/?[^>]+(>|$)/g, '')}
        />
        <TeamGrid
          title={
            'Gentleman\'s Journal is a leading men\'s luxury lifestyle publication, with a focus on style, travel, cars, watches, business and property. Here\'s our office:'
          }
          teamMembers={pageData.membersOfStaff.staffMembers}
        />
        <TeamGrid title={'Contributors:'} teamMembers={pageData.membersOfStaff.staffEditors} />
      </Section>
    </PageLayout>
  )
}

export default TeamPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const pageData = await client.query(pageQuery(165103))

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      pageData: pageData.data.page,
    },
    // revalidate: 60,
  }
}
