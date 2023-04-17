import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import BannerAdvert from '@components/BannerAdvert'
import Divider from '@components/Divider'
import FeatureCarousel from '@components/FeatureCarousel'
import PageLayout from '@components/PageLayout'
import PodcastCarousel from '@components/PodcastCarousel'
import PodcastIntro from '@components/PodcastIntro'
import PodcastList from '@components/PodcastList'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import client from '@lib/apollo-client'


import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { PodcastOptions } from '@queries/podcasts/podcast-options'
import { podcastOptionsQuery } from '@queries/podcasts/podcast-options'
import type { PageData } from '@typings/PageData.types'

interface PodcastPageProps extends PageData {
  podcastOptions: PodcastOptions
}

const PodcastPage: FC<PodcastPageProps> = ({ podcastOptions, headerNav, footerNav, siteOptions }: PodcastPageProps): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(3)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={{ title: 'Podcasts | The Gentleman\'s Journal' }} siteOptions={siteOptions}>
      <FeatureCarousel
        height={1}
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
      <PodcastIntro host={podcastOptions.host} text={podcastOptions.overviewDescription} />
      <BannerAdvert parent='gj_970x250' slot='GJ_970x250_001' />
      <PodcastCarousel title='Featured Podcasts' podcasts={podcastOptions.featured.featured} />
      <PodcastList />
      <Divider />
    </PageLayout>
  )
}

export default PodcastPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const podcastOptions = await client.query(podcastOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      podcastOptions: podcastOptions.data.podcastOptions.podcastOptions.podcastGlobal,
    },
  }
}
