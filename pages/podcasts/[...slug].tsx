import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import BannerAdvert from '@components/BannerAdvert'
import PageLayout from '@components/PageLayout'
import PodcastCarousel from '@components/PodcastCarousel'
import PodcastContent from '@components/PodcastContent'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import { getAllPosts } from '@lib/api'
import client from '@lib/apollo-client'


import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { PodcastBody } from '@queries/podcasts/podcast-body'
import { podcastBodyQuery } from '@queries/podcasts/podcast-body'
import type { PodcastOptions } from '@queries/podcasts/podcast-options'
import { podcastOptionsQuery } from '@queries/podcasts/podcast-options'
import type { PageData } from '@typings/PageData.types'
import type { StaticPaths } from '@typings/StaticPaths.types'

interface PodcastData extends PageData {
  podcastData: PodcastBody
  podcastOptions: PodcastOptions
}

const Podcast: FC<PodcastData> = ({ podcastData, podcastOptions, headerNav, footerNav, siteOptions }: PodcastData): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(3)
  }, [setActiveNavElement])

  return (
    <PageLayout
      headerStyle='standard'
      headerNav={headerNav}
      footerNav={footerNav}
      seo={podcastData.seo}
      siteOptions={siteOptions}
      databaseId={podcastData.databaseId}
    >
      <BannerAdvert parent='GJ_728x90_001_0' paddingLevel={1} />
      <PodcastContent {...podcastData} {...podcastOptions} />
      <PodcastCarousel title='You might also like' podcasts={podcastOptions.featured.featured} />
    </PageLayout>
  )
}

export default Podcast

export async function getStaticPaths() {
  const allPodcasts = await getAllPosts('podcast')

  const paths = allPodcasts.map((podcast) => {
    if (!podcast) return
    if (!podcast.node) return
    return {
      params: {
        slug: [podcast.node.slug],
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
  const podcast = await client.query(podcastBodyQuery(slug[0], preview))
  const podcastOptions = await client.query(podcastOptionsQuery)

  if (!podcast.data.podcast) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      podcastData: podcast.data.podcast,
      podcastOptions: podcastOptions.data.podcastOptions.podcastOptions.podcastGlobal,
    },
    revalidate: 60,
  }
}
