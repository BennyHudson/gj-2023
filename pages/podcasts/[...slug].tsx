import React, { FC, ReactElement, useEffect, useContext } from 'react'
import { gql } from '@apollo/client'

import client from '@lib/apollo-client'
import { getAllPosts } from '@lib/api'

import { podcastOptionsQuery } from '@queries/podcasts/podcast-options'
import { podcastContent } from '@queries/fragments/podcastContent'

import HeadTags from '@components/HeadTags'
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
      <HeadTags seo={podcastData.seo} />
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
    fallback: 'blocking',
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
          seo {
            breadcrumbs {
              text
              url
            }
            canonical
            cornerstone
            focuskw
            metaDesc
            metaKeywords
            metaRobotsNofollow
            metaRobotsNoindex
            opengraphAuthor
            opengraphDescription
            opengraphImage {
              sourceUrl
            }
            opengraphModifiedTime
            opengraphPublishedTime
            opengraphPublisher
            opengraphSiteName
            opengraphTitle
            opengraphType
            opengraphUrl
            readingTime
            schema {
              articleType
              pageType
            }
            title
            twitterDescription
            twitterImage {
              sourceUrl
            }
            twitterTitle
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