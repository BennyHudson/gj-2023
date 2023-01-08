import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { podcastOptionsQuery } from '@queries/podcasts/podcast-options'

import FeatureCarousel from '@components/FeatureCarousel'
import BannerAdvert from '@components/BannerAdvert'
import PodcastIntro from '@components/PodcastIntro'
import PodcastList from '@components/PodcastList'
import PodcastCarousel from '@components/PodcastCarousel'
import Divider from '@components/Divider'

import PageContext, { PageContextProps } from '@context/PageContext'
import HeadTags from '@components/HeadTags'

const Podcasts: FC = ({ podcastOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(3)
  }, [setActiveNavElement])

  return (
    <>
      <HeadTags seo={{ title: 'Podcasts | The Gentleman\'s Journal'  }} />
      <FeatureCarousel
        title='Podcasts'
        cta='Listen Now'
        posts={podcastOptions.featured.hero.map((podcast) => {
          return {
            ...podcast,
            subtitle: `${podcast.podcasts.podcastMeta.guest.name}, ${podcast.podcasts.podcastMeta.guest.about}`,
            meta: `${podcast.podcasts.podcastMeta.guest.name}, ${podcast.podcasts.podcastMeta.guest.about}`,
          }
        })}
      />
      <PodcastIntro 
        host={podcastOptions.host} 
        text={podcastOptions.overviewDescription}
      />
      <BannerAdvert />
      <PodcastCarousel 
        title='Featured Podcasts' 
        podcasts={podcastOptions.featured.featured}
      />
      <PodcastList />
      <Divider />
    </>
  )
}

export default Podcasts

export async function getStaticProps() {
  const podcastOptions = await client.query(podcastOptionsQuery)

  return {
    props: {
      podcastOptions: podcastOptions.data.podcastOptions.podcastOptions.podcastGlobal,
    }
  }
}