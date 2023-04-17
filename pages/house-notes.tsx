import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import HouseNotesFeature from '@components/HouseNotesFeature'
import HouseNotesFeed from '@components/HouseNotesFeed'
import PageLayout from '@components/PageLayout'
import Section from '@components/Section'
import Title from '@components/Title'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import client from '@lib/apollo-client'


import type { HouseNote } from '@queries/fragments/houseNoteContent'
import type { Seo } from '@queries/fragments/seo'
import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import { houseNotesQuery } from '@queries/houseNotes/featured-houseNotes'
import type { PageData } from '@typings/PageData.types'

interface HouseNotesPageProps extends PageData {
  pageData: {
    seo: Seo
    additionalPageData: {
      subtitleText: string
    }
    houseNotes: {
      houseNotesOverheardColumn: HouseNote
      houseNotesPodcastColumn: HouseNote
      houseNotesWatchColumn: HouseNote
      houseNotesScrollColumn: HouseNote[]
      houseNotesReadColumn: HouseNote[]
      houseNotesQuoteColumn: HouseNote
    }
  }
}

const HouseNotesPage: FC<HouseNotesPageProps> = ({ pageData, headerNav, footerNav, siteOptions }: HouseNotesPageProps): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(5)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={pageData.seo} headerStyle='standard' siteOptions={siteOptions}>
      <HouseNotesFeature
        introText={pageData.additionalPageData.subtitleText.replace(/<\/?[^>]+(>|$)/g, '')}
        columns={{
          overheard: pageData.houseNotes.houseNotesOverheardColumn,
          listen: pageData.houseNotes.houseNotesPodcastColumn,
          watch: pageData.houseNotes.houseNotesWatchColumn,
          scroll: pageData.houseNotes.houseNotesScrollColumn,
          read: pageData.houseNotes.houseNotesReadColumn,
          quote: pageData.houseNotes.houseNotesQuoteColumn,
        }}
      />
      <Section>
        <Title title='Archive' />
        <HouseNotesFeed />
      </Section>
    </PageLayout>
  )
}

export default HouseNotesPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const pageData = await client.query(houseNotesQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      pageData: pageData.data.page,
    },
  }
}
