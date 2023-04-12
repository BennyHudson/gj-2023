import type { FC, ReactElement} from 'react'
import React, { useContext, useEffect } from 'react'

import HouseNotesFeature from '@components/HouseNotesFeature'
import HouseNotesFeed from '@components/HouseNotesFeed'
import PageLayout from '@components/PageLayout'
import Section from '@components/Section'
import Title from '@components/Title'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import client from '@lib/apollo-client'

import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import { houseNotesQuery } from '@queries/houseNotes/featured-houseNotes'

const HouseNotes: FC = ({ featuredHouseNotes, headerNav, footerNav, siteOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(5)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={featuredHouseNotes.seo} headerStyle='standard' siteOptions={siteOptions}>
      <HouseNotesFeature
        introText={featuredHouseNotes.additionalPageData.subtitleText.replace(/<\/?[^>]+(>|$)/g, '')}
        columns={{
          overheard: featuredHouseNotes.houseNotes.houseNotesOverheardColumn,
          listen: featuredHouseNotes.houseNotes.houseNotesPodcastColumn,
          watch: featuredHouseNotes.houseNotes.houseNotesWatchColumn,
          scroll: featuredHouseNotes.houseNotes.houseNotesScrollColumn,
          read: featuredHouseNotes.houseNotes.houseNotesReadColumn,
          quote: featuredHouseNotes.houseNotes.houseNotesQuoteColumn,
        }}
      />
      <Section>
        <Title title='Archive' />
        <HouseNotesFeed />
      </Section>
    </PageLayout>
  )
}

export default HouseNotes

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const featuredHouseNotes = await client.query(houseNotesQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      featuredHouseNotes: featuredHouseNotes.data.page,
    },
  }
}
