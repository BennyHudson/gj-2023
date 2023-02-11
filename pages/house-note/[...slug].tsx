import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'
import { getAllPosts } from '@lib/api'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import BannerAdvert from '@components/BannerAdvert'

import PageContext, { PageContextProps } from '@context/PageContext'
import HeroImage from '@components/HeroImage'
import Section from '@components/Section'
import Masthead from '@components/Masthead'
import ContentGrid from '@components/ContentGrid'

import PageLayout from '@components/PageLayout'
import { HouseNoteBody, houseNoteBodyQuery } from '@queries/houseNotes/houseNote-body'
import { StaticPaths } from '@typings/StaticPaths.types'
import { PageData } from '@typings/PageData.types'
import { ArticleNote } from '@queries/fragments/articleNote'

interface HouseNoteData extends PageData {
  pageData: HouseNoteBody
  articleNote: ArticleNote
}

const HouseNote: FC<HouseNoteData> = ({ pageData, articleNote, headerNav, footerNav }: HouseNoteData): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(5)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={pageData.seo}>
      <HeroImage featuredImage={pageData.featuredImage.node.sourceUrl} />
      <BannerAdvert slot='GJ_970x250_001' />
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

export async function getStaticProps({ params }: StaticPaths) {
  const { slug } = params

  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const response = await client.query(houseNoteBodyQuery(slug))

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      pageData: response.data.houseNote,
      articleNote: response.data.gjOptions.articleNote,
    },
    // revalidate: 60
  }
}
