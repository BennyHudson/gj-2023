import React, { FC, ReactElement, useContext, useEffect } from 'react'

import client from '@lib/apollo-client'

import { houseNotesQuery } from '@queries/houseNotes/featured-houseNotes'

import HouseNotesFeature from '@components/HouseNotesFeature'
import HouseNotesFeed from '@components/HouseNotesFeed'
import Section from '@components/Section'
import Title from '@components/Title'

import PageContext, { PageContextProps } from '@context/PageContext'

const HouseNotes: FC = ({ featuredHouseNotes }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(5)
  }, [setActiveNavElement])

  return (
    <>
      <HouseNotesFeature
        introText={featuredHouseNotes.page.additionalPageData.subtitleText.replace(/<\/?[^>]+(>|$)/g, '')}
        columns={{
          overheard: featuredHouseNotes.page.houseNotes.houseNotesOverheardColumn,
          listen: featuredHouseNotes.page.houseNotes.houseNotesPodcastColumn,
          watch: featuredHouseNotes.page.houseNotes.houseNotesWatchColumn,
          scroll: featuredHouseNotes.page.houseNotes.houseNotesScrollColumn,
          read: featuredHouseNotes.page.houseNotes.houseNotesReadColumn,
          quote: featuredHouseNotes.page.houseNotes.houseNotesQuoteColumn,
        }}
      />
      <Section>
        <Title title='Archive' />
        <HouseNotesFeed />
      </Section>
    </>
  )
}

export default HouseNotes

export async function getStaticProps() {
  const featuredHouseNotes = await client.query(houseNotesQuery)

  return {
    props: {
      featuredHouseNotes: featuredHouseNotes.data,
    }
  }
}
