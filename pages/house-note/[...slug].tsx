import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import BannerAdvert from '@components/BannerAdvert'
import ContentGrid from '@components/ContentGrid'
import HeroImage from '@components/HeroImage'
import Masthead from '@components/Masthead'
import PageLayout from '@components/PageLayout'
import Section from '@components/Section'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import { getAllPosts } from '@lib/api'
import client from '@lib/apollo-client'


import type { ArticleNote } from '@queries/fragments/articleNote'
import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { HouseNoteBody } from '@queries/houseNotes/houseNote-body'
import { houseNoteBodyQuery } from '@queries/houseNotes/houseNote-body'
import type { PageData } from '@typings/PageData.types'
import type { StaticPaths } from '@typings/StaticPaths.types'

interface HouseNoteData extends PageData {
  pageData: HouseNoteBody
  articleNote: ArticleNote
}

const HouseNote: FC<HouseNoteData> = ({ pageData, articleNote, headerNav, footerNav, siteOptions }: HouseNoteData): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(5)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={pageData.seo} siteOptions={siteOptions} databaseId={pageData.databaseId}>
      <HeroImage featuredImage={pageData.featuredImage.node.fullSize} />
      <BannerAdvert parent='GJ_728x90_001_0' paddingLevel={1} />
      <Section>
        <Masthead
          title={pageData.title}
          subtitle={pageData.articleType.articleTypeLandingPageExcerpt}
          fullWidth={false}
          author={pageData.author.node.name}
        />
        <ContentGrid
          contentBuilder={{ content: pageData.articleAcf.contentBuilder, membersOnly: false }}
          contentBuilderPrefix='HouseNote_Articleacf_ContentBuilder'
          articleNote={articleNote}
        />
      </Section>
    </PageLayout>
  )
}

export default HouseNote

export async function getStaticPaths() {
  const allHouseNotes = await getAllPosts('houseNote')

  const paths = allHouseNotes.map((houseNote) => {
    if (!houseNote) return
    if (!houseNote.node) return
    return {
      params: {
        slug: [houseNote.node.slug],
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ preview = false, params }: StaticPaths) {
  const { slug } = params

  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const response = await client.query(houseNoteBodyQuery(slug[0], preview))

  if (!response.data.houseNote) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      pageData: response.data.houseNote,
      articleNote: response.data.gjOptions.articleNote,
    },
    revalidate: 60,
  }
}
