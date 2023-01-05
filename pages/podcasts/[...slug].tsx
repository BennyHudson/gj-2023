import React, { FC, ReactElement, useEffect, useContext } from 'react'
import { gql } from '@apollo/client'

import client from '@lib/apollo-client'
import { getAllPosts } from '@lib/api'

import { podcastOptionsQuery } from '@queries/podcasts/podcast-options'
import { podcastContent } from '@queries/fragments/podcastContent'

import BannerAdvert from '@components/BannerAdvert'
import PodcastContent from '@components/PodcastContent'
import PodcastCarousel from '@components/PodcastCarousel'

import PageContext, { PageContextProps } from '@context/PageContext'

const Podcast: FC = ({ podcastData, podcastOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(3)
  }, [setActiveNavElement])

  return (
    <>
      <BannerAdvert />
      <PodcastContent {...podcastData} {...podcastOptions} />
      <PodcastCarousel 
        title='You might also like'
        podcasts={podcastOptions.featured.featured}
      />
    </>
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
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const response = await client.query({
    query: gql`
      ${podcastContent}
      query podcastQuery {
        podcast(id: "${slug}", idType: SLUG) {
          ... PodcastContent
          content
        }
      }
    `,
  })

  const podcastOptions = await client.query(podcastOptionsQuery)
      
  return {
    props: {
      podcastData: response.data.podcast,
      podcastOptions: podcastOptions.data.podcastOptions.podcastOptions.podcastGlobal,
    }
  }
}