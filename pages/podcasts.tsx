import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { podcastOptionsQuery } from '@queries/podcasts/podcast-options'

import FeatureCarousel from '@components/carousels/FeatureCarousel'
import BannerAdvert from '@components/layout/BannerAdvert'
import PodcastIntro from '@components/podcast/PodcastIntro'
import PodcastList from '@components/grids/PodcastList'
import PodcastCarousel from '@components/carousels/PodcastCarousel'
import Divider from '@components/layout/Divider'

import PageContext, { PageContextProps } from '@context/PageContext'
import HeadTags from '@components/layout/HeadTags'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import PageLayout from '@components/layout/PageLayout'

const Podcasts: FC = ({ podcastOptions, headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(3)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <HeadTags seo={{ title: 'Podcasts | The Gentleman\'s Journal'  }} />
      <FeatureCarousel
        height={2}
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
    </PageLayout>
  )
}

export default Podcasts

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const podcastOptions = await client.query(podcastOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      podcastOptions: podcastOptions.data.podcastOptions.podcastOptions.podcastGlobal,
    }
  }
}