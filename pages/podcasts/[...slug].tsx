import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'
import { getAllPosts } from '@lib/api'

import { PodcastOptions, podcastOptionsQuery } from '@queries/podcasts/podcast-options'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { PodcastBody, podcastBodyQuery } from '@queries/podcasts/podcast-body'

import PageLayout from '@components/PageLayout'
import BannerAdvert from '@components/BannerAdvert'
import PodcastContent from '@components/PodcastContent'
import PodcastCarousel from '@components/PodcastCarousel'

import PageContext, { PageContextProps } from '@context/PageContext'

import { StaticPaths } from '@typings/StaticPaths.types'
import { PageData } from '@typings/PageData.types'

interface PodcastData extends PageData {
  podcastData: PodcastBody
  podcastOptions: PodcastOptions
}

const Podcast: FC<PodcastData> = ({ podcastData, podcastOptions, headerNav, footerNav }: PodcastData): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(3)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={podcastData.seo}>
      <BannerAdvert slot='GJ_970x250_001' />
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

export async function getStaticProps({ params }: StaticPaths) {
  const { slug } = params

  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const podcast = await client.query(podcastBodyQuery(slug))
  const podcastOptions = await client.query(podcastOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      podcastData: podcast.data.podcast,
      podcastOptions: podcastOptions.data.podcastOptions.podcastOptions.podcastGlobal,
    },
    // revalidate: 60
  }
}
