import React, { FC, ReactElement, useEffect, useContext } from 'react'

import { gql } from '@apollo/client'

import client from '@lib/apollo-client'

import { podcastOptionsQuery } from '@queries/podcasts/podcast-options'

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
  const getAllPodcasts = await client.query({
    query: gql`
      query allPodcasts {
        podcasts(first: 100) {
          nodes {
            slug
            uri
          }
        }
      }
    `
  })

  const allPodcasts = getAllPodcasts.data.podcasts.nodes

  if (!allPodcasts) return 

  const paths = allPodcasts.map((podcast) => {
    if (!podcast.slug) return
    return {
      params: {
        slug: [podcast.slug],
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
      query podcastQuery {
        podcast(id: "${slug}", idType: SLUG) {
          title
          uri
          date
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          podcasts {
            podcastMeta {
              guest {
                name
                about
              }
              media {
                audio
              }
            }
          }
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