import React, { FC, ReactElement, useContext, useEffect } from 'react'

import client from '@lib/apollo-client'

import { houseNotesQuery } from '@queries/houseNotes/featured-houseNotes'

import HouseNotesFeature from '@components/HouseNotesFeature'
import HouseNotesFeed from '@components/HouseNotesFeed'
import Section from '@components/Section'
import Title from '@components/Title'

import PageContext, { PageContextProps } from '@context/PageContext'
import HeadTags from '@components/HeadTags'

const HouseNotes: FC = ({ featuredHouseNotes }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(5)
  }, [setActiveNavElement])

  return (
    <>
      <HeadTags seo={featuredHouseNotes.seo} />
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
    </>
  )
}

export default HouseNotes

export async function getStaticProps() {
  const featuredHouseNotes = await client.query(houseNotesQuery)

  return {
    props: {
      featuredHouseNotes: featuredHouseNotes.data.page,
    }
  }
}
